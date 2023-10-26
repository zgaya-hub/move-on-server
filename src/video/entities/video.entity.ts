import { ObjectType, Field } from '@nestjs/graphql';
import { EnumColumn, IntColumn, JoinColumn } from '@/decorator/entity/entity.decorator';
import { Entity, Index, OneToOne } from 'typeorm';
import { Movie } from '@/movie/entities/movie.entity';
import { Series } from '@/series/entities/series.entity';
import { EntityBase } from '@/base/entity.base';
import { VideoQualitiesEnum } from '../enum/video.enum';

@ObjectType()
@Entity({ name: 'video' })
@Index('unique_movie_series', ['movie', 'series'], { unique: true })
export class Video extends EntityBase {
  @Field()
  @EnumColumn({ name: 'quality', enum: VideoQualitiesEnum })
  quality: VideoQualitiesEnum;

  @Field()
  @IntColumn({ name: 'width' })
  width: number;

  @Field()
  @IntColumn({ name: 'height' })
  height: number;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.video, { nullable: true })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.video, { nullable: true })
  @JoinColumn({ name: 'series_id' })
  series: Series;
}
