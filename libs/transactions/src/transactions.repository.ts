import { PrismaService } from '@app/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { TransactionCreateDto } from './dto/transaction.create.dto';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: TransactionCreateDto) {
    return this.prisma.transaction.create({
      data: dto,
    });
  }
}
