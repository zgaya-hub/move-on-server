/* eslint-disable @typescript-eslint/no-namespace */

import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export namespace MovieInputDto {
  export class CreateMovieInput {
    @IsString()
    videoId: string;

    @IsNotEmpty()
    @IsString()
    mediaImageId: string;

    @IsObject()
    @IsNotEmpty()
    basicMediaInfo: any;
  }
}
