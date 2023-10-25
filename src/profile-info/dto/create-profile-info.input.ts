import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProfileInfoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
