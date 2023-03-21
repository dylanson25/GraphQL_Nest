import { IsNumber, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateFakeStoreDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  description: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
