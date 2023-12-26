import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne } from 'typeorm';
import { JoinColumn } from 'src/decorator/entity/entity.decorator';
import { Movie } from 'src/movie/entities/movie.entity';
import { Crew } from 'src/crew/entities/crew.entity';
import { EntityBase } from 'src/base/EntityBase';

@ObjectType()
@Entity()
export class MovieCrew extends EntityBase {
  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.movieCrew)
  @JoinColumn()
  movie: Movie;

  @Field(() => Crew)
  @ManyToOne(() => Crew, (crew) => crew.movieCrew)
  @JoinColumn()
  crew: Crew;
}
