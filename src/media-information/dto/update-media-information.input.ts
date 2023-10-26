import { CreateMediaInformationInput } from './create-media-information.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMediaInformationInput extends PartialType(CreateMediaInformationInput) {
  @Field(() => Int)
  id: number;
}
