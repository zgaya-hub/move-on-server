import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTrailerCineastInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
