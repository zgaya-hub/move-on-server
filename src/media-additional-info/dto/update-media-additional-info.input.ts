import { CreateMediaAdditionalInfoInput } from './create-media-additional-info.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMediaAdditionalInfoInput extends PartialType(CreateMediaAdditionalInfoInput) {
  @Field(() => Int)
  id: number;
}
