import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsModule as LibProductsModule } from '@app/products';

@Module({
  imports: [LibProductsModule],
  controllers: [ProductsController],
})
export class ProductsModule {}
