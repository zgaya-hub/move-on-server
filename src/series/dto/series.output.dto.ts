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
    mediaOriginCountry: MediaCountriesEnum;

    @Field(() => String)
    mediaOriginalLanguage: MediaLanguagiesEnum;

    @Field(() => String)
    mediaGenre: MediaGenriesEnum;

    @Field(() => String)
    mediaStatus: MediaStatusEnum;

    @Field(() => String)
    mediaTitle: string;

    @Field(() => String)
    mediaPlotSummary: string;

    @Field(() => Number)
    mediaReleaseDate: number;

    @Field(() => String)
    mediaImageUrl: string;

    @Field(() => Number)
    createdAt: number;

    @Field(() => Number, { nullable: true })
    updatedAt: number;
  }
}
