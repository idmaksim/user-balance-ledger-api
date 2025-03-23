import { PrismaService } from '@app/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { TransactionCreateDto } from './dto/transaction.create.dto';
import { TransactionSearchDto } from './dto/transaction.search.dto';
import { mapPagination, mapSearch } from '@app/prisma';
import { mapSort } from '@app/prisma/map.sort';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: TransactionCreateDto) {
    return this.prisma.transaction.create({
      data: dto,
    });
  }

  async search(dto: TransactionSearchDto) {
    return this.prisma.transaction.findMany({
      where: mapSearch(dto.filters),
      orderBy: mapSort(dto.sorts),
      ...mapPagination(dto.pagination),
      include: {
        product: true,
      },
    });
  }

  async findOneById(id: string) {
    return this.prisma.transaction.findUnique({
      where: { id },
    });
  }

  async count(dto: TransactionSearchDto) {
    return this.prisma.transaction.count({
      where: mapSearch(dto.filters),
    });
  }
}
