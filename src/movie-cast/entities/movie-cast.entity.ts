import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne } from 'typeorm';
import { EntityBase } from '@/base/EntityBase';
import { Cast } from '@/cast/entities/cast.entity';
import { Movie } from '@/movie/entities/movie.entity';
import { JoinColumn } from '@/decorator/entity/entity.decorator';

@ObjectType()
@Entity()
export class MovieCast extends EntityBase {
  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.movieCast)
  @JoinColumn()
  movie: Movie;

  @Field(() => Cast)
  @ManyToOne(() => Cast, (cast) => cast.movieCast)
  @JoinColumn()
  cast: Cast;
}
