import { IsString, IsNumber } from 'class-validator';

export class FakeStore {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsNumber()
  price: number;
}
