/* eslint-disable @typescript-eslint/no-namespace */
import { MediaImageVariantEnum } from 'src/common/enum/common.enum';
import { Field, InputType, OmitType } from '@nestjs/graphql';
import { IsEnum, IsMimeType, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export namespace MediaImageInputDto {
  @InputType()
  export class CreateMediaImageInput {
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
    @IsEnum(MediaImageVariantEnum)
    Variant: MediaImageVariantEnum;
  }

  @InputType()
  export class UpdateMediaImageInput {
    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsString()
    Url: string;

    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsEnum(MediaImageVariantEnum)
    Variant: MediaImageVariantEnum;
  }

  @InputType()
  export class ChangeThumbnailImageInput extends OmitType(CreateMediaImageInput, ['Variant']) {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    Base64: string;
  }
}
