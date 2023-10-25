import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSeriesInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
