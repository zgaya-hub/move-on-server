import { ObjectType, Field } from '@nestjs/graphql';
import { JoinColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { Entity, ManyToOne } from 'typeorm';
import { EntityBase } from '@/base/EntityBase';
import { Episode } from '@/episode/entities/episode.entity';
import { Series } from '@/series/entities/series.entity';
import { Movie } from '@/movie/entities/movie.entity';
import { Trailer } from '@/trailer/entities/trailer.entity';

@ObjectType()
@Entity()
export class ExternalLink extends EntityBase {
  @Field()
  @VarcharColumn()
  elResourceName: string;

  @Field()
  @VarcharColumn()
  elUrl: string;

  @Field()
  @VarcharColumn()
  elType: string; // TODO: should be change into ENUM in future

  @Field(() => Episode)
  @ManyToOne(() => Episode, (episode) => episode.externalLink, { nullable: true })
  @JoinColumn()
  episode: Episode;

  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.externalLink, { nullable: true })
  @JoinColumn()
  series: Series;

  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.externalLink, { nullable: true })
  @JoinColumn()
  movie: Movie;

  @Field(() => Trailer)
  @ManyToOne(() => Trailer, (trailer) => trailer.externalLink, { nullable: true })
  @JoinColumn()
  trailer: Trailer;
}
