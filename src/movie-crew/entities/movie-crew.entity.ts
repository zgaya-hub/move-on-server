import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne } from 'typeorm';
import { JoinColumn } from '@/decorator/entity/entity.decorator';
import { Movie } from '@/movie/entities/movie.entity';
import { Crew } from '@/crew/entities/crew.entity';
import { EntityBase } from '@/base/entity.base';

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
