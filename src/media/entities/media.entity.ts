import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne } from 'typeorm';
import { Movie } from '@/movie/entities/movie.entity';
import { Series } from '@/series/entities/series.entity';
import { EntityBase } from '@/base/entity.base';
import { Episode } from '@/episode/entities/episode.entity';
import { MediaTypesEnum } from '../enum/media.enum';
import { Season } from '@/season/entities/season.entity';
import { EnumColumn, JoinColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';

@ObjectType()
@Entity({ name: 'media' })
export class Media extends EntityBase {
  @Field()
  @EnumColumn({ name: 'type', enum: MediaTypesEnum })
  type: MediaTypesEnum;

  @Field()
  @VarcharColumn({ name: 'S3_object_key' })
  S3ObjectKey: string;

  // is nullable possible
  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.media, { nullable: true })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  // is nullable possible
  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.media, { nullable: true })
  @JoinColumn({ name: 'series_id' })
  series: Series;

  // is nullable possible
  @Field(() => Season)
  @ManyToOne(() => Season, (season) => season.media, { nullable: true })
  @JoinColumn({ name: 'season_id' })
  season: Season;

  // is nullable possible
  @Field(() => Episode)
  @ManyToOne(() => Episode, (episode) => episode.media, { nullable: true })
  @JoinColumn({ name: 'episode_id' })
  episode: Episode;
}
