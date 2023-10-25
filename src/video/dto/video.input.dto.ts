/* eslint-disable @typescript-eslint/no-namespace */
import { InputType, Field } from '@nestjs/graphql';
import { IsMimeType, IsNumber, IsOptional, Max, Min } from 'class-validator';

export namespace VideoInputDto {
  @InputType()
  export class GetS3UploadVdeoUrlInput {
    // for Detect Video or a short
    @Field(() => Number)
    @IsNumber()
    width: number;

    // for Detect Video or a short
    @Field(() => Number)
    @IsNumber()
    height: number;

    // In Bytes
    @Field(() => Number)
    @IsNumber()
    @Max(100000)
    @Min(100)
    size: number;

    // Extension
    @Field(() => String)
    @IsMimeType()
    mime: VideoMineType;

    @IsOptional()
    isShort: boolean;
  }
}
