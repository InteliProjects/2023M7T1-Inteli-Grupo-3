import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { IOrder } from 'src/interface/order.interface';

@Injectable()
export class MessagingService {
  constructor(private prisma: PrismaService) {}
  @RabbitSubscribe({
    exchange: 'order_exchange',
    routingKey: 'order_routing_key',
    queue: 'orders_to_process',
  })
  public async proccessOrderPayment(order: IOrder) {
    await this.delay(20000);
    console.log('Processing order ', order.orderId);
    if (order.payment.cardNumber === '5063516945005047') {
      console.log('✅ Payment accepted');
      await this.prisma.order.update({
        where: {
          id: order.orderId,
        },
        data: {
          status: 'PAYMENT_ACCEPTED',
        },
      });
    } else {
      console.log('❌ Payment rejected');
      await this.prisma.order.update({
        where: {
          id: order.orderId,
        },
        data: {
          status: 'PAYMENT_REJECTED',
        },
      });
    }
  }

  delay = (ms) => new Promise((res) => setTimeout(res, ms));
}
