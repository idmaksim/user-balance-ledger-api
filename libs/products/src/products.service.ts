import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { ProductSearchDto } from './dto/product.search.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}

  async search(dto: ProductSearchDto) {
    const [data, count] = await Promise.all([
      this.productRepository.search(dto),
      this.productRepository.count(dto),
    ]);

    return { data, count };
  }
}
