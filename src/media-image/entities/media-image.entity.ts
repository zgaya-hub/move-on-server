import { ObjectType, Field, Int } from '@nestjs/graphql';
import { EnumColumn, JoinColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { Movie } from '@/movie/entities/movie.entity';
import { Entity, ManyToOne } from 'typeorm';
import { Series } from '@/series/entities/series.entity';
import { Season } from '@/season/entities/season.entity';
import { Episode } from '@/episode/entities/episode.entity';
import { MediaImagesTypesEnum } from '../enum/media-image.enum';
import { EntityBase } from '@/base/entity.base';

@ObjectType()
@Entity({ name: 'media_image' })
export class MediaImage extends EntityBase {
  @Field()
  @EnumColumn({ name: 'type', enum: MediaImagesTypesEnum })
  type: MediaImagesTypesEnum;

  @Field()
  @VarcharColumn({ name: 'url' })
  url: string;

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
