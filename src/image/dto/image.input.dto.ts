/* eslint-disable @typescript-eslint/no-namespace */
import { ImageVariantEnum } from 'src/common/enum/common.enum';
import { Field, InputType, OmitType } from '@nestjs/graphql';
import { IsEnum, IsMimeType, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ImageMimeType } from '../types';

export namespace ImageInputDto {
  @InputType()
  export class CreateImageInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    Base64: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsMimeType()
    Mime: ImageMimeType;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(ImageVariantEnum)
    Variant: ImageVariantEnum;
  }

  @InputType()
  export class UpdateImageInput {
    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsString()
    Url: string;

    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsEnum(ImageVariantEnum)
    Variant: ImageVariantEnum;
  }

  @InputType()
  export class ChangeThumbnailImageInput extends OmitType(CreateImageInput, ['Variant']) {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    Base64: string;
  }

  @InputType()
  export class GetImageByMediaIdParams {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    MediaId: string;
  }
}
