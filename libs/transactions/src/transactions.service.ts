import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from './transactions.repository';
import { TransactionCreateDto } from './dto/transaction.create.dto';
import { TransactionSearchDto } from './dto/transaction.search.dto';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
    private readonly i18n: I18nService,
  ) {}

  async create(dto: TransactionCreateDto) {
    return this.transactionsRepository.create(dto);
  }

  async search(dto: TransactionSearchDto) {
    const [data, count] = await Promise.all([
      this.transactionsRepository.search(dto),
      this.transactionsRepository.count(dto),
    ]);

    return { data, count };
  }

  async findOneById(id: string) {
    const transaction = await this.transactionsRepository.findOneById(id);

    if (!transaction) {
      throw new NotFoundException(this.i18n.t('errors.transactions.notFound'));
    }

    return transaction;
  }
}
