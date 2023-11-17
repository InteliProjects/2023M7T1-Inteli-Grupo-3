/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../service/app.service';
import { PrismaService } from '../service/prisma.service';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { mock } from 'jest-mock-extended'

describe('OrderService', () => {
  let service: AppService;
  let prisma: PrismaService;
  let amq: AmqpConnection;

  const mockedOrder = {
    id: '689db89b-0ee5-41a2-9850-85b270c75391',
    user: {
      id: '1',
      name: 'User Name',
      email: 'user@example.com',
      password: 'hashedPassword',
      telephone: '123456789',
    },
    userId: '1',
    products: [
      {
        product:{
          id: 'product-1',
          name: 'Product Name 1',
          description: 'Product Description 1',
          price: 10.99,
          image: 'https://example.com/image1.png',
          orders: [
            {
              id: 'order-product-1',
              orderId: '689db89b-0ee5-41a2-9850-85b270c75391',
              productId: 'product-1',
              quantity: 2,
            },
          ],
        }
      },
      {
        id: 'product-2',
        name: 'Product Name 2',
        description: 'Product Description 2',
        price: 15.99,
        image: 'https://example.com/image2.png',
        orders: [
          {
            id: 'order-product-2',
            orderId: '689db89b-0ee5-41a2-9850-85b270c75391',
            productId: 'product-2',
            quantity: 1,
          },
        ],
      },
    ],
    shipping: {
      id: 'shipping-1',
      orderId: '689db89b-0ee5-41a2-9850-85b270c75391',
      zip: '12345-678',
      city: 'São Paulo',
      address: '123 Street Name',
      state: 'SP',
      price: 5.99,
    },
    status: 'RECEIVED',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService, PrismaService, { provide: AmqpConnection, useValue: mock<AmqpConnection>() }],
    }).compile();

    service = module.get<AppService>(AppService);
    prisma = module.get<PrismaService>(PrismaService);
    amq = module.get<AmqpConnection>(AmqpConnection);
  });

  describe('createOrder', () => {
    it('should create a order', async () => {
      prisma.order.create = jest.fn().mockResolvedValueOnce(mockedOrder);

      const createOrderDtoMock = {
        products: [
          {
            productId: '1',
            quantity: 2,
          },
        ],
        shipping: {
          zip: '12345-678',
          city: 'São Paulo',
          address: '123 Street Name',
          state: 'SP',
        },
        payment: {
          cardNumber: '1234567890123456',
          cardName: 'Cardholder Name',
          cardExpirationDate: '12/24',
          cardSecurityCode: '123',
        },
      };

      const order = await service.create(mockedOrder.user, createOrderDtoMock, amq);

      expect(order).toMatchObject({
        id: expect.any(String),
      });

      expect(order.products[0]).toMatchObject({
        productId: createOrderDtoMock.products[0].productId,
        quantity: createOrderDtoMock.products[0].quantity,
      });
    });
  });

  describe('getAllOrders', () => {
    it('should return an array of orders', async () => {
      const mockedOrders = [
        {
          id: 'product-1',
          name: 'Product Name 1',
          description: 'Product Description 1',
          price: 10.99,
          image: 'https://example.com/image1.png',
        },
        {
          id: 'product-2',
          name: 'Product Name 2',
          description: 'Product Description 2',
          price: 15.99,
          image: 'https://example.com/image2.png',
        },
      ];
  
      prisma.product.findMany = jest.fn().mockResolvedValueOnce(mockedOrders);
  
      const products = await service.findAll(mockedOrder.user.id);
  
      expect(products).toEqual(expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
          description: expect.any(String),
          price: expect.any(Number),
          image: expect.any(String),
        }),
      ]));
    });
  });
});
