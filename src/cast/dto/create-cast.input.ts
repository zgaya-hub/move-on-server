import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCastInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
