import {
  IsNumber,
  IsString,
  IsNotEmpty,
  MinLength,
  IsPositive,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateFakeStoreDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({
    description: 'Product title',
    minLength: 4,
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @ApiProperty({
    description: 'Product description',
    minLength: 10,
  })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Image product URL',
  })
  image: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'Product price',
    minimum: 1,
  })
  price: number;
}
