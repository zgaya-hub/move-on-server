import { CreateCineastInput } from './create-cineast.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCineastInput extends PartialType(CreateCineastInput) {
  @Field(() => Number)
  id: number;
}
