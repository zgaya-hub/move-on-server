import { CreateExternalLinkInput } from './create-external-link.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateExternalLinkInput extends PartialType(CreateExternalLinkInput) {
  @Field(() => Number)
  id: number;
}
