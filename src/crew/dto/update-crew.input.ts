import { CreateCrewInput } from './create-crew.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCrewInput extends PartialType(CreateCrewInput) {
  @Field(() => Number)
  id: number;
}
