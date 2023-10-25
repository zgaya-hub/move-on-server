import { CreateProfileInfoInput } from './create-profile-info.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProfileInfoInput extends PartialType(CreateProfileInfoInput) {
  @Field(() => Number)
  id: number;
}
