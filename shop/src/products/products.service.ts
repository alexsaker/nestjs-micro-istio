import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import Axios from 'axios';

@Injectable()
export class ProductsService {
  private stockUrl = 'http://wharehouse:4000/';
  private products: Product[] = [
    { id: 1, label: 'shoe', price: 34, stock: null },
    { id: 2, label: 'console', price: 340, stock: null },
  ];
  async getAllProducts(): Promise<Product[]> {
    const stock = await Axios.get(`${this.stockUrl}`);
    return this.products.map(product => {
      const foundIdx = stock.data.findIndex(el => el.id === product.id);
      product.stock = foundIdx !== -1 ? stock.data[foundIdx].stock : 0;
      return product;
    });
  }
}
