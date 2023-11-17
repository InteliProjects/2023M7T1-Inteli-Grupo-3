import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateOrderDto } from 'src/interface/order.create.dto';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async create(
    user: any,
    createOrderDto: CreateOrderDto,
    amqpConnection: AmqpConnection,
  ) {
    const { products, shipping, payment } = createOrderDto;

    const userFromDb = await this.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    products.forEach(async (product) => {
      const productExists = await this.prisma.product.findUnique({
        where: {
          id: product.productId,
        },
      });

      if (!productExists) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Product does not exist',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    });

    if (!payment) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Payment is required',
        },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      const { cardNumber, cardName, cardExpirationDate, cardSecurityCode } =
        payment;

      if (
        !cardNumber ||
        !cardName ||
        !cardExpirationDate ||
        !cardSecurityCode
      ) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Payment is required',
          },
          HttpStatus.BAD_REQUEST,
        );
      } else {
        const cardNumberRegex = new RegExp('^[0-9]{16}$');
        const cardExpirationDateRegex = new RegExp('^[0-9]{2}/[0-9]{2}$');
        const cardSecurityCodeRegex = new RegExp('^[0-9]{3}$');

        if (
          !cardNumberRegex.test(cardNumber) ||
          !cardExpirationDateRegex.test(cardExpirationDate) ||
          !cardSecurityCodeRegex.test(cardSecurityCode)
        ) {
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              error: 'Invalid payment data',
            },
            HttpStatus.BAD_REQUEST,
          );
        }
      }
    }

    const order = await this.prisma.order.create({
      data: {
        shipping: {
          create: {
            zip: shipping.zip,
            city: shipping.city,
            address: shipping.address,
            state: shipping.state,
          },
        },
        user: {
          connect: {
            id: userFromDb.id,
          },
        },
        products: {
          create: products.map((product) => ({
            quantity: product.quantity,
            product: {
              connect: {
                id: product.productId,
              },
            },
          })),
        },
        status: 'RECEIVED',
      },
      include: {
        products: {
          include: {
            product: true,
          },
        },
        shipping: true,
      },
    });

    console.log(order);

    const total = order.products.reduce(
      (acc, product) => acc + product.product.price * product.quantity,
      0,
    );

    amqpConnection.publish(
      'order_exchange',
      'order_routing_key',
      { orderId: order.id, total, payment },
      { persistent: true },
    );

    return order;
  }

  async findAll(user: any) {
    const userFromDb = await this.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    const orders = await this.prisma.order.findMany({
      where: {
        userId: userFromDb.id,
      },
      include: {
        products: {
          include: {
            product: true,
          },
        },
        shipping: true,
      },
    });

    return orders;
  }

  async findOne(user: any, id: string) {
    const userFromDb = await this.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    const order = await this.prisma.order.findUnique({
      where: {
        id,
      },
      include: {
        products: {
          include: {
            product: true,
          },
        },
        shipping: true,
      },
    });

    if (!order) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Order not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    if (order.userId !== userFromDb.id) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'You are not allowed to access this order',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    return order;
  }
}
