import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional, IsBoolean } from 'class-validator';

@ArgsType()
export class StatusArgs {
  @Field(() => Boolean, {
    description: 'Status of returned TODOs',
    nullable: true,
  })
  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
