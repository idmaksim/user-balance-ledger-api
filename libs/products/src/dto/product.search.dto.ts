import { ApiProperty, PartialType } from '@nestjs/swagger';
import { ProductBaseDto } from './product.base.dto';
import { SortTypes } from '@app/common/constants/sort-types.enum';
import { IsEnum, ValidateNested } from 'class-validator';
import { SearchBaseDto } from '@app/common/base/search.dto';
import { Type } from 'class-transformer';

export class ProductFiltersDto extends PartialType(ProductBaseDto) {}

export class ProductSortDto {
  @ApiProperty({ enum: SortTypes })
  @IsEnum(SortTypes)
  name: SortTypes;
}

export class ProductSearchDto extends SearchBaseDto<
  ProductFiltersDto,
  ProductSortDto
> {
  @ApiProperty({ type: ProductFiltersDto })
  @Type(() => ProductFiltersDto)
  @ValidateNested()
  filters: ProductFiltersDto;

  @ApiProperty({ type: ProductSortDto })
  @Type(() => ProductSortDto)
  @ValidateNested()
  sorts: ProductSortDto;
}
