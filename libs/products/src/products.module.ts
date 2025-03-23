import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductRepository } from './product.repository';
import { PrismaModule } from '@app/prisma/prisma.module';
import { TransactionsModule } from '@app/transactions';

@Module({
  imports: [PrismaModule, TransactionsModule],
  providers: [ProductsService, ProductRepository],
  exports: [ProductsService],
})
export class ProductsModule {}
