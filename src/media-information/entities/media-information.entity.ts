import { ObjectType, Field } from '@nestjs/graphql';
import { EnumColumn, IntColumn, JoinColumn, TextColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { CountriesEnum, LanguagiesEnum } from '@/common/enum/common.enum';
import { Entity, Index, OneToOne } from 'typeorm';
import { Movie } from '@/movie/entities/movie.entity';
import { Series } from '@/series/entities/series.entity';
import { EntityBase } from '@/base/entity.base';
import { MediaGenriesEnum, MediaStatusEnum } from '../enum/media-info.enum';

@ObjectType()
@Entity({ name: 'media_information' })
@Index('unique_movie_series', ['movie', 'series'], { unique: true })
export class MediaInformation extends EntityBase {
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
  @EnumColumn({ name: 'status', enum: MediaStatusEnum })
  status: MediaStatusEnum;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.mediaInformation, { nullable: true })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.mediaInformation, { nullable: true })
  @JoinColumn({ name: 'series_id' })
  series: Series;
}
