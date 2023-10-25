import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMovieCastInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
