import { CreateTrailerCineastInput } from './create-trailer-cineast.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTrailerCineastInput extends PartialType(CreateTrailerCineastInput) {
  @Field(() => Int)
  id: number;
}
