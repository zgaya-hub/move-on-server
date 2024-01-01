import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSeriesCineastInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
