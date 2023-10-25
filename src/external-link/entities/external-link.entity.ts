import { ObjectType, Field } from '@nestjs/graphql';
import { JoinColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { Entity, ManyToOne } from 'typeorm';
import { EntityBase } from '@/base/entity.base';
import { Episode } from '@/episode/entities/episode.entity';
import { Series } from '@/series/entities/series.entity';
import { Movie } from '@/movie/entities/movie.entity';

@ObjectType()
@Entity({ name: 'external_link' })
export class ExternalLink extends EntityBase {
  @Field()
  @VarcharColumn({ name: 'resource_name' })
  resourceName: string;

  @Field()
  @VarcharColumn({ name: 'url' })
  url: string;

  @Field()
  @VarcharColumn({ name: 'type' })
  type: string; // TODO: should be change into ENUM in future

  @Field(() => Episode)
  @ManyToOne(() => Episode, (episode) => episode.review, { nullable: true })
  @JoinColumn({ name: 'episode_id' })
  episode: Episode;

  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.review, { nullable: true })
  @JoinColumn({ name: 'series_id' })
  series: Series;

  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.review, { nullable: true })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;
}
