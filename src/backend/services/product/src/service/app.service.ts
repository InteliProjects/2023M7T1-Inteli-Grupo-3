import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ProductDto } from 'src/interface/product.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createProduct(productDto: ProductDto): Promise<ProductDto> {
    const { name, description, price, image } = productDto;

    const product = await this.prisma.product.create({
      data: {
        name,
        description,
        price,
        image,
      },
    });

    return product;
  }

  async getAllProducts(): Promise<ProductDto[]> {
    const products = await this.prisma.product.findMany();

    return products;
  }
}
