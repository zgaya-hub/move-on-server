import { CreateRadiInput } from './create-radi.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRadiInput extends PartialType(CreateRadiInput) {
  @Field(() => Int)
  id: number;
}
