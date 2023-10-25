import { CreateManagerActivityInput } from './create-manager-activity.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateManagerActivityInput extends PartialType(CreateManagerActivityInput) {
  @Field(() => Number)
  id: number;
}
