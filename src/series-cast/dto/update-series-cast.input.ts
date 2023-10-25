import { CreateSeriesCastInput } from './create-series-cast.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSeriesCastInput extends PartialType(CreateSeriesCastInput) {
  @Field(() => Number)
  id: number;
}
