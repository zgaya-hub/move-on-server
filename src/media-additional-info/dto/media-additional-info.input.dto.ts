/* eslint-disable @typescript-eslint/no-namespace */
import { IsEnum, IsNotEmpty } from 'class-validator';
import { CountriesEnum, LanguagiesEnum } from '../../common/enum/common.enum';
import { MediaGenriesEnum, MediaStatusEnum } from '../enum/media-additional-info.enum';
import { Field, InputType } from '@nestjs/graphql';

export namespace MediaAdditionalInfoInputDto {
  @InputType()
  export class CreateMediaAdditionalInfoInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(CountriesEnum)
    OriginCountry: CountriesEnum;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(LanguagiesEnum)
    OriginalLanguage: LanguagiesEnum;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(MediaGenriesEnum)
    Genre: MediaGenriesEnum;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(MediaStatusEnum)
    Status: MediaStatusEnum;
  }
}
