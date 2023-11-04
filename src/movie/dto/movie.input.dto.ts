/* eslint-disable @typescript-eslint/no-namespace */

import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export namespace MovieInputDto {
  export class CreateMovieInput {
    @IsString()
    videoInfoId: string;

    @IsNotEmpty()
    @IsString()
    mediaImageId: string;

    @IsOptional()
    @IsNumber()
    priceInDollar: number;

    @IsOptional()
    @IsBoolean()
    isFree: boolean;

    // @IsObject()
    // @IsNotEmpty()
    // // basicMediaInfo:
  }
}
