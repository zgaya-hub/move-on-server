import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMediaBasicInfoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
