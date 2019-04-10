import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  @Get()
  async getProducts(): Promise<Product[]> {
    return await this.productService.getAllProducts();
  }
}
