/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType, OmitType } from '@nestjs/graphql';
import { IsEnum, IsMimeType, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { MediaImageTypeEnum } from '../enum/media-image.enum';

export namespace MediaImageInputDto {
  @InputType()
  export class CreateMediaImageInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    MediaImageBase64: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsMimeType()
    MediaImageMime: ImageMimeType;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(MediaImageTypeEnum)
    MediaImageType: MediaImageTypeEnum;
  }

  @InputType()
  export class ChangeThumbnailImageInput extends OmitType(CreateMediaImageInput, ['MediaImageType']) {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    MediaImageId: string;
  }
}
