import { ObjectType, Field } from '@nestjs/graphql';
import { JoinColumn, VarcharColumn } from 'src/decorator/entity/entity.decorator';
import { Entity, ManyToOne } from 'typeorm';
import { EntityBase } from 'src/base/EntityBase';
import { Episode } from 'src/episode/entities/episode.entity';
import { Series } from 'src/series/entities/series.entity';
import { Movie } from 'src/movie/entities/movie.entity';
import { Trailer } from 'src/trailer/entities/trailer.entity';
import { Cineast } from 'src/cineast/entities/cineast.entity';

@ObjectType()
@Entity()
export class ExternalLink extends EntityBase {
  @Field()
  @VarcharColumn()
  resourceName: string;

  @Field()
  @VarcharColumn()
  url: string;

  @Field(() => Episode)
  @ManyToOne(() => Episode, (episode) => episode.externalLink, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  episode: Episode;

  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.externalLink, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  series: Series;

  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.externalLink, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  movie: Movie;

  @Field(() => Trailer)
  @ManyToOne(() => Trailer, (trailer) => trailer.externalLink, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  trailer: Trailer;

  @Field(() => Cineast)
  @ManyToOne(() => Cineast, (cineast) => cineast.externalLink, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  cineast: Cineast;
}
