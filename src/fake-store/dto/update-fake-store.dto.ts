import {
  IsNumber,
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFakeStoreDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @IsOptional()
  @ApiProperty({
    description: 'Product title',
    minLength: 4,
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @IsOptional()
  @ApiProperty({
    description: 'Product description',
    minLength: 10,
  })
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    description: 'Image product URL',
  })
  image: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @IsPositive()
  @ApiProperty({
    description: 'Product price',
    minimum: 1,
  })
  price: number;
}
