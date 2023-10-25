import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from '@/base/entity.base';
import { Entity, Index, OneToOne } from 'typeorm';
import { MediaGenriesEnum, MediaQualitiesEnum, MediaStatusEnum } from '../enum/media-info.enum';
import { Movie } from '@/movie/entities/movie.entity';
import { Series } from '@/series/entities/series.entity';
import { CountriesEnum, LanguagiesEnum } from '@/common/enum/common.enum';
import { ArrayColumn, DecimalColumn, EnumColumn, IntColumn, JoinColumn, TextColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';

@ObjectType()
@Entity({ name: 'media_info' })
@Index('unique_movie_series', ['movie', 'series'], { unique: true })
export class MediaInfo extends EntityBase {
  @Field()
  @VarcharColumn({ name: 'title' })
  title: string;

  // have default value
  @Field()
  @TextColumn({ name: 'plot_summary' })
  plotSummary: string;

  @Field()
  @IntColumn({ name: 'release_date' })
  releaseDate: number;

  // in milliseconds
  @Field()
  @IntColumn({ name: 'run_time' })
  runTime: number;

  @Field()
  @EnumColumn({ name: 'origin_country', enum: CountriesEnum })
  originCountry: CountriesEnum;

  @Field()
  @EnumColumn({ name: 'original_language', enum: LanguagiesEnum })
  originalLanguage: LanguagiesEnum;

  @Field()
  @EnumColumn({ name: 'genre', enum: MediaGenriesEnum })
  genre: MediaGenriesEnum;

  @Field()
  @EnumColumn({ name: 'quality', enum: MediaQualitiesEnum })
  quality: MediaQualitiesEnum;

  @Field()
  @EnumColumn({ name: 'status', enum: MediaStatusEnum })
  status: MediaStatusEnum;

  // this should be in dollar in DB
  @Field()
  @DecimalColumn({ name: 'net_profit' })
  netProfit: number;

  // this should be in dollar in DB
  @Field()
  @DecimalColumn({ name: 'budget' })
  budget: number;

  // this should be in dollar in DB
  @Field()
  @DecimalColumn({ name: 'revenue' })
  revenue: number;

  @Field()
  @DecimalColumn({ name: 'IMDb_rating' })
  IMDbRating: number;

  @Field()
  @DecimalColumn({ name: 'OMDb_rating' })
  OMDbRating: number;

  @Field(() => [String])
  @ArrayColumn({ name: 'award' })
  award: Array<string>;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.mediaInfo, { nullable: true })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.mediaInfo, { nullable: true })
  @JoinColumn({ name: 'series_id' })
  series: Series;
}
