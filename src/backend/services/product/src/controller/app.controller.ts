import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { ProductDto } from 'src/interface/product.dto';

@Controller('/api/v1/product')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  async createProduct(@Body() productDto: ProductDto): Promise<ProductDto> {
    return this.appService.createProduct(productDto);
  }

  @Get('/')
  async getAllProducts(): Promise<ProductDto[]> {
    return this.appService.getAllProducts();
  }
}
