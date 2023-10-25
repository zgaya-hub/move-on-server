import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMediaInfoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
