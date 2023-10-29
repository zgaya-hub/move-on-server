import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRadiInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
