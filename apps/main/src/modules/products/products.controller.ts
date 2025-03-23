import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from '@app/products';
import { ProductSearchDto } from '@app/products/dto/product.search.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('search')
  async search(@Body() dto: ProductSearchDto) {
    return this.productsService.search(dto);
  }
}
