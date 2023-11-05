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
@Entity()
@Index('unique_movie_series', ['movie', 'series'], { unique: true })
export class Video extends EntityBase {
  @Field()
  @VarcharColumn()
  managerId: string;

  @Field()
  @EnumColumn({ enum: VideoQualityEnum })
  videoQuality: VideoQualityEnum;

  @Field()
  @IntColumn()
  videoWidth: number;

  @Field()
  @IntColumn()
  videoHeight: number;

  // in mbs
  @Field()
  @IntColumn()
  videoSizeInKb: number;

  // in mbs
  @Field()
  @VarcharColumn()
  videoMime: string;

  // in milliseconds
  @Field()
  @IntColumn()
  videoRunTime: number;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.video, { nullable: true })
  @JoinColumn()
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.video, { nullable: true })
  @JoinColumn()
  series: Series;

  @Field(() => Season)
  @OneToOne(() => Season, (season) => season.video, { nullable: true })
  @JoinColumn()
  season: Season;

  @Field(() => Episode)
  @OneToOne(() => Episode, (episode) => episode.video, { nullable: true })
  @JoinColumn()
  episode: Episode;
}
