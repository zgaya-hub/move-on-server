import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFinancialInfoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
