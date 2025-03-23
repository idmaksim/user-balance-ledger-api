import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { ProductSearchDto } from './dto/product.search.dto';
import { ProductBuyDto } from './dto/product.buy.dto';
import { User } from '@app/common';
import { I18nService } from 'nestjs-i18n';
import { TransactionsService } from '@app/transactions';
import { UsersService } from '@app/users';

@Injectable()
export class ProductsService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly i18n: I18nService,
    private readonly transactionService: TransactionsService,
    private readonly usersService: UsersService,
  ) {}

  async search(dto: ProductSearchDto) {
    const [data, count] = await Promise.all([
      this.productRepository.search(dto),
      this.productRepository.count(dto),
    ]);

    return { data, count };
  }

  async buy(dto: ProductBuyDto, user: User) {
    const product = await this.findOneById(dto.productId);
    await this.checkBalance(user.balance, product.price * dto.amount);

    await this.transactionService.create({
      userId: user.id,
      productId: product.id,
      amount: product.price * dto.amount,
      action: 'buy',
    });

    await this.usersService.updateBalance(user, -product.price * dto.amount);

    return {
      message: this.i18n.t('products.buy.success'),
    };
  }

  async findOneById(id: string) {
    const product = await this.productRepository.findOneById(id);

    if (!product) {
      throw new NotFoundException(this.i18n.t('errors.products.notFound'));
    }

    return product;
  }

  private async checkBalance(userBalance: number, requiredBalance: number) {
    if (userBalance < requiredBalance) {
      throw new BadRequestException(
        this.i18n.t('errors.products.insufficientBalance'),
      );
    }
  }
}
