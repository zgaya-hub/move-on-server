import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCineastInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
