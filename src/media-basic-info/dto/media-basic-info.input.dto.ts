/* eslint-disable @typescript-eslint/no-namespace */

import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export namespace MediaBasicInfoInputDto {
  @InputType()
  export class CreateMediaBasicInfoInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    Title: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    @MinLength(40)
    PlotSummary: string;

    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    ReleaseDate: number;
  }
}
