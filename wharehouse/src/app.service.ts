import { Injectable } from '@nestjs/common';
import { Stock } from './stock.model';

@Injectable()
export class AppService {
  getStock(): Stock[] {
    return [{ id: 1, stock: 600 }, { id: 2, stock: 500 }];
  }
}
