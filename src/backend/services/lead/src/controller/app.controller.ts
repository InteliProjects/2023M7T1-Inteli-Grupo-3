import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { LeadDto } from 'src/interface/lead.dto';

@Controller('/api/v1/lead')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  async createLead(@Body() lead: LeadDto) {
    return this.appService.createLead(lead);
  }
}
