import { ObjectType, Field, Int } from '@nestjs/graphql';
import { JoinColumn, VarcharColumn } from '../../decorator/entity/entity.decorator';
import { Movie } from '../../movie/entities/movie.entity';
import { Entity, OneToOne } from 'typeorm';
import { Episode } from '../../episode/entities/episode.entity';
import { Trailer } from '../../trailer/entities/trailer.entity';
import { EntityBase } from '../../base/entity.base';

@ObjectType()
@Entity()
export class MediaResource extends EntityBase {
  @Field()
  @VarcharColumn()
  mediaS3ObjectKey: string;

  // is nullable possible
  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.mediaResource, { nullable: true })
  @JoinColumn()
  movie: Movie;

  // is nullable possible
  @Field(() => Episode)
  @OneToOne(() => Episode, (episode) => episode.mediaResource, { nullable: true })
  @JoinColumn()
  episode: Episode;

  // is nullable possible
  @Field(() => Trailer)
  @OneToOne(() => Trailer, (trailer) => trailer.mediaResource, { nullable: true })
  @JoinColumn()
  trailer: Trailer;
}
