import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Controller('')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly amqpConnection: AmqpConnection,
  ) {}

  @Get('/api/v1/health')
  health() {
    return {
      status: 'Healthy',
      description: 'The API is healthy.',
    };
  }
}
