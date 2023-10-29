import { ObjectType, Field } from '@nestjs/graphql';
import { EnumColumn, IntColumn, JoinColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { Entity, Index, OneToOne } from 'typeorm';
import { Movie } from '@/movie/entities/movie.entity';
import { Series } from '@/series/entities/series.entity';
import { EntityBase } from '@/base/entity.base';
import { VideoQualityEnum } from '../enum/video.enum';
import { Episode } from '../../episode/entities/episode.entity';
import { Season } from '../../season/entities/season.entity';

@ObjectType()
@Entity({ name: 'video' })
@Index('unique_movie_series', ['movie', 'series'], { unique: true })
export class Video extends EntityBase {
  @Field()
  @VarcharColumn({ name: 'managerId' })
  managerId: string;

  @Field()
  @EnumColumn({ name: 'quality', enum: VideoQualityEnum })
  quality: VideoQualityEnum;

  @Field()
  @IntColumn({ name: 'width' })
  width: number;

  @Field()
  @IntColumn({ name: 'height' })
  height: number;

  // in mbs
  @Field()
  @IntColumn({ name: 'size_in_kb' })
  sizeInKb: number;

  // in mbs
  @Field()
  @VarcharColumn({ name: 'mime' })
  mime: string;

  // in milliseconds
  @Field()
  @IntColumn({ name: 'run_time' })
  runTime: number;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.video, { nullable: true })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.video, { nullable: true })
  @JoinColumn({ name: 'series_id' })
  series: Series;

  @Field(() => Season)
  @OneToOne(() => Season, (season) => season.video, { nullable: true })
  @JoinColumn({ name: 'season_id' })
  season: Season;

  @Field(() => Episode)
  @OneToOne(() => Episode, (episode) => episode.video, { nullable: true })
  @JoinColumn({ name: 'episode_id' })
  episode: Episode;
}
