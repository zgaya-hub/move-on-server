/* eslint-disable @typescript-eslint/no-namespace */
import { IsEnum, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { MediaCountriesEnum, MediaLanguagiesEnum } from 'src/common/enum/common.enum';
import { MediaGenriesEnum, MediaStatusEnum } from '../enum/media-additional-info.enum';
import { Field, InputType, PartialType } from '@nestjs/graphql';

export namespace MediaAdditionalInfoInputDto {
  @InputType()
  export class CreateMediaAdditionalInfoInput {
    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsEnum(MediaCountriesEnum)
    OriginCountry: MediaCountriesEnum;

    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsEnum(MediaLanguagiesEnum)
    OriginalLanguage: MediaLanguagiesEnum;

    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsEnum(MediaGenriesEnum)
    Genre: MediaGenriesEnum;

    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsEnum(MediaStatusEnum)
    Status: MediaStatusEnum;
  }
  @InputType()
  export class UpdateMediaAdditionalInfoInput extends PartialType(CreateMediaAdditionalInfoInput) {}

  @InputType()
  export class GetMediaAdditionalInfoByMediaIdParams {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    MediaId: string;
  }
}
