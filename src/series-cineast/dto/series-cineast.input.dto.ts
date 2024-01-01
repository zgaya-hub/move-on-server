/* eslint-disable @typescript-eslint/no-namespace */

import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

export namespace SeriesCineastInputDto {
  @InputType()
  export class GetSeriesCineastBySeriesIdParams {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    SeriesId: string;
  }
}
