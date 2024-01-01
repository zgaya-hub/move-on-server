import { CreateMovieCineastInput } from './create-movie-cineast.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMovieCineastInput extends PartialType(CreateMovieCineastInput) {
  @Field(() => Int)
  id: number;
}
