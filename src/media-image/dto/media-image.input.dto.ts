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
    url: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(MediaImageTypeEnum)
    type: MediaImageTypeEnum;
  }

  @InputType()
  export class MediaImageUploadInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    base64: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsMimeType()
    mime: ImageMimeType;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(MediaImageTypeEnum)
    type: MediaImageTypeEnum;
  }
}
