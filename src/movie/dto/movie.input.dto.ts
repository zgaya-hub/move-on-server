/* eslint-disable @typescript-eslint/no-namespace */

import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export namespace MovieInputDto {
  export class CreateMovieInput {
    @IsNotEmpty()
    @IsString()
    videoInfoId: string;

    @IsOptional()
    @IsNumber()
    priceInDollar: number;

    @IsOptional()
    @IsBoolean()
    isFree: boolean;
  }
}
