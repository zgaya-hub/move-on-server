/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsMimeType, IsNotEmpty, IsString } from 'class-validator';
import { MediaImageTypeEnum } from '../enum/media-image.enum';

export namespace MediaImageInputDto {
  @InputType()
  export class MediaImageCreateInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    mediaImageUrl: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(MediaImageTypeEnum)
    mediaImageType: MediaImageTypeEnum;
  }

  @InputType()
  export class MediaImageUploadInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    mediaImageBase64: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsMimeType()
    mediaImageMime: ImageMimeType;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(MediaImageTypeEnum)
    mediaImageType: MediaImageTypeEnum;
  }
}
