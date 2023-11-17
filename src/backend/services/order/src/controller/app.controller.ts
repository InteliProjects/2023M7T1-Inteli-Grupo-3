import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { CreateOrderDto } from 'src/interface/order.create.dto';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Controller('')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly amqpConnection: AmqpConnection,
  ) {}

  @Post('/api/v1/order')
  create(@Body() createOrderDto: CreateOrderDto, @Headers() headers: any) {
    return this.appService.create(
      JSON.parse(headers.user),
      createOrderDto,
      this.amqpConnection,
    );
  }

  @Get('/api/v1/order')
  findAll(@Headers() headers: any) {
    return this.appService.findAll(JSON.parse(headers.user));
  }

  @Get('/api/v1/order/:id')
  findOne(@Headers() headers: any, @Param('id') id: string) {
    return this.appService.findOne(JSON.parse(headers.user), id);
  }

  @Get('/api/v1/health')
  health() {
    return {
      status: 'Healthy',
      description: 'The API is healthy.',
    };
  }
}
