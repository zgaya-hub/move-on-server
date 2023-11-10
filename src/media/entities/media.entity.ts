import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, OneToOne } from 'typeorm';
import { Movie } from '@/movie/entities/movie.entity';
import { EntityBase } from '@/base/entity.base';
import { Episode } from '@/episode/entities/episode.entity';
import { JoinColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { Trailer } from '@/trailer/entities/trailer.entity';

@ObjectType()
@Entity()
export class Media extends EntityBase {
  @Field()
  @VarcharColumn()
  MediaS3ObjectKey: string;

  // is nullable possible
  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.media, { nullable: true })
  @JoinColumn()
  movie: Movie;

  // is nullable possible
  @Field(() => Episode)
  @OneToOne(() => Episode, (episode) => episode.media, { nullable: true })
  @JoinColumn()
  episode: Episode;

  // is nullable possible
  @Field(() => Trailer)
  @OneToOne(() => Trailer, (trailer) => trailer.media, { nullable: true })
  @JoinColumn()
  trailer: Trailer;
}
