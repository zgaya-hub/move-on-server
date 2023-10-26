import { CreateFinancialInfoInput } from './create-financial-info.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFinancialInfoInput extends PartialType(CreateFinancialInfoInput) {
  @Field(() => Int)
  id: number;
}
