import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from 'src/base/EntityBase';
import { Cineast } from 'src/cineast/entities/cineast.entity';
import { JoinColumn } from 'src/decorator/entity/entity.decorator';
import { Movie } from 'src/movie/entities/movie.entity';
import { Entity, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class MovieCineast extends EntityBase {
  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.movieCineast)
  @JoinColumn()
  movie: Movie;

  @Field(() => Cineast)
  @ManyToOne(() => Cineast, (cineast) => cineast.movieCineast)
  @JoinColumn()
  cineast: Cineast;
}
