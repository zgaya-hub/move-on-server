import { CreateSeriesCineastInput } from './create-series-cineast.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSeriesCineastInput extends PartialType(CreateSeriesCineastInput) {
  @Field(() => Int)
  id: number;
}
