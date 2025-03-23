import { Injectable } from '@nestjs/common';
import { TransactionsRepository } from './transactions.repository';
import { TransactionCreateDto } from './dto/transaction.create.dto';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async create(dto: TransactionCreateDto) {
    return this.transactionsRepository.create(dto);
  }
}
