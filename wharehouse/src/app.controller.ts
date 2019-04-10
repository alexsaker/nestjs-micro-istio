import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Stock } from './stock.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getStock(): Promise<Stock[]> {
    return this.appService.getStock();
  }
}
