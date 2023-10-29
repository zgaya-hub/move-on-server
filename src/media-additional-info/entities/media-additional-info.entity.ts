import { ObjectType, Field } from '@nestjs/graphql';
import { Movie } from '@/movie/entities/movie.entity';
import { Entity, Index, OneToOne } from 'typeorm';
import { EnumColumn, JoinColumn } from '@/decorator/entity/entity.decorator';
import { Series } from '@/series/entities/series.entity';
import { CountriesEnum, LanguagiesEnum } from '@/common/enum/common.enum';
import { EntityBase } from '@/base/entity.base';
import { MediaGenriesEnum, MediaStatusEnum } from '../enum/media-additional-info.enum';

@ObjectType()
@Entity({ name: 'media_additional_info' })
@Index('unique_movie_series', ['movie', 'series'], { unique: true })
export class MediaAdditionalInfo extends EntityBase {
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
  @OneToOne(() => Movie, (movie) => movie.mediaAdditionalInfo, { nullable: true })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.media, { nullable: true })
  @JoinColumn({ name: 'series_id' })
  series: Series;
}
