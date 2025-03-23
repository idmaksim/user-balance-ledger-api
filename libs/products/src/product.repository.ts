import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma/prisma.service';
import { ProductSearchDto } from './dto/product.search.dto';
import { mapPagination, mapSearch } from '@app/prisma';
import { mapSort } from '@app/prisma/map.sort';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async search(dto: ProductSearchDto) {
    return this.prisma.product.findMany({
      where: mapSearch(dto.filters),
      orderBy: mapSort(dto.sorts),
      ...mapPagination(dto.pagination),
    });
  }

  async count(dto: ProductSearchDto) {
    return this.prisma.product.count({
      where: mapSearch(dto.filters),
    });
  }
}
