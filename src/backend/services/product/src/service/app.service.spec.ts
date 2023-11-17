import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../service/app.service';
import { PrismaService } from '../service/prisma.service';

describe('ProductService', () => {
  let service: AppService;
  let prisma: PrismaService;

  const mockedProduct = {
    id: '689db89b-0ee5-41a2-9850-85b270c75391',
    name: 'Product Name',
    description: 'Product Description',
    price: 10.99,
    image: 'https://example.com/image.png',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService, PrismaService],
    }).compile();

    service = module.get<AppService>(AppService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('createProduct', () => {
    it('should create a product', async () => {
      prisma.product.create = jest.fn().mockResolvedValueOnce(mockedProduct);

      const productDto = {
        name: 'Product Name',
        description: 'Product Description',
        price: 10.99,
        image: 'https://example.com/image.png',
      };

      const product = await service.createProduct(productDto);

      expect(product).toMatchObject({
        id: expect.any(String),
        name: productDto.name,
        description: productDto.description,
        price: productDto.price,
        image: productDto.image,
      });
    });
  });

  describe('getAllProducts', () => {
    it('should return an array of products', async () => {
      prisma.product.findMany = jest
        .fn()
        .mockResolvedValueOnce([mockedProduct]);

      const products = await service.getAllProducts();

      expect(products).toEqual([
        {
          id: expect.any(String),
          name: mockedProduct.name,
          description: mockedProduct.description,
          price: mockedProduct.price,
          image: mockedProduct.image,
        },
      ]);
    });
  });
});
