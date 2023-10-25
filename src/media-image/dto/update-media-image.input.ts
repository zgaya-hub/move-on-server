import { CreateMediaImageInput } from './create-media-image.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMediaImageInput extends PartialType(CreateMediaImageInput) {
  @Field(() => Number)
  id: number;
}
