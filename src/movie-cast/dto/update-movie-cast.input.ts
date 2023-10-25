import { CreateMovieCastInput } from './create-movie-cast.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMovieCastInput extends PartialType(CreateMovieCastInput) {
  @Field(() => Number)
  id: number;
}
