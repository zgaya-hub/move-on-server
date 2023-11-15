import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTrailerInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
