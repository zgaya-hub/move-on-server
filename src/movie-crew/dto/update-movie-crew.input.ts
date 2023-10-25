import { CreateMovieCrewInput } from './create-movie-crew.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMovieCrewInput extends PartialType(CreateMovieCrewInput) {
  @Field(() => Number)
  id: number;
}
