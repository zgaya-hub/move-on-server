/* eslint-disable @typescript-eslint/no-namespace */
import { Field, ObjectType } from '@nestjs/graphql';
import { MediaCountriesEnum, MediaLanguagiesEnum } from 'src/common/enum/common.enum';
import { MediaGenriesEnum, MediaStatusEnum } from 'src/media-additional-info/enum/media-additional-info.enum';

export namespace SeriesOutputDto {
  @ObjectType()
  export class GetManagerSeriesForTableOutput {
    @Field(() => [GetManagerTableOutputSeriesList])
    seriesList: GetManagerTableOutputSeriesList[];

    @Field(() => Number)
    totalRecords: number;
  }

  @ObjectType()
  export class GetManagerTableOutputSeriesList {
    @Field(() => String)
    ID: string;

    @Field(() => String)
    originCountry: MediaCountriesEnum;

    @Field(() => String)
    originalLanguage: MediaLanguagiesEnum;

    @Field(() => String)
    genre: MediaGenriesEnum;

    @Field(() => String)
    status: MediaStatusEnum;

    @Field(() => String)
    title: string;

    @Field(() => String)
    plotSummary: string;

    @Field(() => Number)
    releaseDate: number;

    @Field(() => String)
    imageUrl: string;

    @Field(() => Number)
    createdAt: number;

    @Field(() => Number, { nullable: true })
    updatedAt: number;
  }
}
