import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCrewInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
