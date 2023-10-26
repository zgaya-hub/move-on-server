import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAchievementInfoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
