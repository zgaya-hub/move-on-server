import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, ManyToOne, OneToOne } from 'typeorm';
import { JoinColumn } from '@/decorator/entity/entity.decorator';
import { Movie } from '@/movie/entities/movie.entity';
import { Crew } from '@/crew/entities/crew.entity';
import { EntityBase } from '@/base/entity.base';

@ObjectType()
@Entity({ name: 'movie_crew' })
export class MovieCrew extends EntityBase {
  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.movieCrew)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Field(() => Crew)
  @ManyToOne(() => Crew, (crew) => crew.movieCrew)
  @JoinColumn({ name: 'crew_id' })
  crew: Crew;
}
