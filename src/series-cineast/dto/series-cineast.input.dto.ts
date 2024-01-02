/* eslint-disable @typescript-eslint/no-namespace */

import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

export namespace SeriesCineastInputDto {
  @InputType()
  export class GetCineastsBySeriesIdParams {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    SeriesId: string;
  }

  @InputType()
  export class CreateSeriesCineastInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    SeriesId: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    CineastId: string;
  }
}
