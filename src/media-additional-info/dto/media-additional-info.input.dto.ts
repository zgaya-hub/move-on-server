/* eslint-disable @typescript-eslint/no-namespace */
import { IsEnum, IsOptional } from 'class-validator';
import { MediaCountriesEnum, MediaLanguagiesEnum } from 'src/common/enum/common.enum';
import { MediaGenriesEnum, MediaStatusEnum } from '../enum/media-additional-info.enum';
import { Field, InputType, PartialType } from '@nestjs/graphql';

export namespace MediaAdditionalInfoInputDto {
  @InputType()
  export class CreateMediaAdditionalInfoInput {
    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsEnum(MediaCountriesEnum)
    MediaOriginCountry: MediaCountriesEnum;

    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsEnum(MediaLanguagiesEnum)
    MediaOriginalLanguage: MediaLanguagiesEnum;

    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsEnum(MediaGenriesEnum)
    MediaGenre: MediaGenriesEnum;

    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsEnum(MediaStatusEnum)
    MediaStatus: MediaStatusEnum;
  }
  @InputType()
  export class UpdateMediaAdditionalInfoInput extends PartialType(CreateMediaAdditionalInfoInput) {}
}
