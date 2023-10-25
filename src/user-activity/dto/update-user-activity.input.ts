import { CreateUserActivityInput } from './create-user-activity.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserActivityInput extends PartialType(CreateUserActivityInput) {
  @Field(() => Number)
  id: number;
}
