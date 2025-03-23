import { DecodeUser, JwtAuthGuard, User } from '@app/common';
import { TransactionsService } from '@app/transactions';
import { TransactionSearchDto } from '@app/transactions/dto/transaction.search.dto';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('transactions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('my')
  async my(@Body() dto: TransactionSearchDto, @DecodeUser() user: User) {
    return this.transactionsService.search({
      ...dto,
      filters: {
        ...dto.filters,
        userId: user.id,
      },
    });
  }
}
