import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsModule as LibTransactionsModule } from '@app/transactions';

@Module({
  imports: [LibTransactionsModule],
  controllers: [TransactionsController],
})
export class TransactionsModule {}
