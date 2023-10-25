import { CreateCastInput } from './create-cast.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCastInput extends PartialType(CreateCastInput) {
  @Field(() => Number)
  id: number;
}
