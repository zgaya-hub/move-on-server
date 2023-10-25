import { CreateSeasonInput } from './create-season.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSeasonInput extends PartialType(CreateSeasonInput) {
  @Field(() => Number)
  id: number;
}
