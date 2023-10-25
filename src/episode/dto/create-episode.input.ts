import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEpisodeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
