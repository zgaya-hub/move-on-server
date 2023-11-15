/* eslint-disable @typescript-eslint/no-namespace */
import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsMimeType, IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { MediaTypeEnum } from '@/common/enum/common.enum';

export namespace VideoInputDto {
  @InputType()
  export class GetUploadVideoSignedUrlInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(MediaTypeEnum)
    Type: MediaTypeEnum;

    // for Detect Video or a short
    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    Width: number;

    // for Detect Video or a short
    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    Height: number;

    // in second
    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    RunTime: number;

    // In Kbs
    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    @Max(6291456)
    @Min(500)
    SizeInKb: number;

    // Extension
    @Field(() => String)
    @IsNotEmpty()
    @IsMimeType()
    Mime: VideoMineType;

    @IsOptional()
    IsShort: boolean;
  }

  @InputType()
  export class CreateVideoInfoInput {}
}
