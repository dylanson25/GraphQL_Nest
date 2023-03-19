import { Resolver, Query, Float, Int, Args } from '@nestjs/graphql';

@Resolver()
export class HellowWorldResolver {
  @Query(() => String, {
    description: 'This is a message to say hello',
    name: 'hello',
  })
  hellowWorld(): string {
    return 'Hello world';
  }
  @Query(() => Float, {
    name: 'randomNumber',
    description: 'This query return a random number',
  })
  getRandomNumber(): number {
    return Math.random() * 100;
  }
  @Query(() => Int, {
    name: 'randomNumberZeroTo',
    description: 'This query return a random number between 0 to 9',
  })
  getRandomFromZeroTo(
    @Args('to', { type: () => Int, nullable: true }) to = 7,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
