import {
  IsNumber,
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
} from 'class-validator';

export class UpdateFakeStoreDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @IsOptional()
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  image: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  price: number;
}
