import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from '@app/products';
import { ProductSearchDto } from '@app/products/dto/product.search.dto';
import { ProductBuyDto } from '@app/products/dto/product.buy.dto';
import { DecodeUser, JwtAuthGuard, User } from '@app/common';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('search')
  async search(@Body() dto: ProductSearchDto) {
    return this.productsService.search(dto);
  }

  @Post('buy')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async buy(@Body() dto: ProductBuyDto, @DecodeUser() user: User) {
    return this.productsService.buy(dto, user);
  }
}
