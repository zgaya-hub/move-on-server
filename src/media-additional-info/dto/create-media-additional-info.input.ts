import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMediaAdditionalInfoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
