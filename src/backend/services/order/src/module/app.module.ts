import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { PrismaService } from '../service/prisma.service';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'orders_to_process',
          type: 'topic',
        },
      ],
      uri: process.env.AMQP_URL,
      enableControllerDiscovery: true,
    }),
    AppModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('/api/v1/order');
  }
}
