import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createLead(lead) {
    return this.prisma.lead.create({
      data: {
        name: lead.name,
        phone: lead.phone,
      },
    });
  }
}
