import { CreateAchievementInfoInput } from './create-achievement-info.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAchievementInfoInput extends PartialType(CreateAchievementInfoInput) {
  @Field(() => Int)
  id: number;
}
