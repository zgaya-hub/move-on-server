import { CreateMediaBasicInfoInput } from './create-media-basic-info.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMediaBasicInfoInput extends PartialType(CreateMediaBasicInfoInput) {
  @Field(() => Int)
  id: number;
}
