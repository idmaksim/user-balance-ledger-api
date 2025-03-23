import { ApiProperty, PartialType } from '@nestjs/swagger';
import { TransactionBaseDto } from './transaction.base.dto';
import { SortTypes } from '@app/common/constants/sort-types.enum';
import { IsEnum, ValidateNested } from 'class-validator';
import { SearchBaseDto } from '@app/common/base/search.dto';
import { Type } from 'class-transformer';

export class TransactionFiltersDto extends PartialType(TransactionBaseDto) {}

export class TransactionSortDto {
  @ApiProperty({ enum: SortTypes })
  @IsEnum(SortTypes)
  userId: SortTypes;

  @ApiProperty({ enum: SortTypes })
  @IsEnum(SortTypes)
  amount: SortTypes;
}

export class TransactionSearchDto extends SearchBaseDto<
  TransactionFiltersDto,
  TransactionSortDto
> {
  @ApiProperty({ type: TransactionFiltersDto })
  @Type(() => TransactionFiltersDto)
  @ValidateNested()
  filters: TransactionFiltersDto;

  @ApiProperty({ type: TransactionSortDto })
  @Type(() => TransactionSortDto)
  @ValidateNested()
  sorts: TransactionSortDto;
}
