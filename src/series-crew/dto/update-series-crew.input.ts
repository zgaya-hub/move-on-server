import { CreateSeriesCrewInput } from './create-series-crew.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSeriesCrewInput extends PartialType(CreateSeriesCrewInput) {
  @Field(() => Number)
  id: number;
}
