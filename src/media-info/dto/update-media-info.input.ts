import { CreateMediaInfoInput } from './create-media-info.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMediaInfoInput extends PartialType(CreateMediaInfoInput) {
  @Field(() => Number)
  id: number;
}
