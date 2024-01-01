/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

export namespace SeriesCrewInputDto {
  @InputType()
  export class GetSeriesCrewByMediaIdParams {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    SeriesId: string;
  }
}
