import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMovieCrewInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
