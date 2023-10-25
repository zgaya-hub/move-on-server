import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne } from 'typeorm';
import { DecimalColumn, JoinColumn, TextColumn } from '@/decorator/entity/entity.decorator';
import { EntityBase } from '@/base/entity.base';
import { User } from '@/user/entities/user.entity';
import { Episode } from '@/episode/entities/episode.entity';
import { Series } from '@/series/entities/series.entity';
import { Movie } from '@/movie/entities/movie.entity';

@ObjectType()
@Entity({ name: 'review' })
export class Review extends EntityBase {
  @Field()
  @DecimalColumn({ name: 'rating' })
  rating: number;

  @Field()
  @TextColumn({ name: 'comment' })
  comment: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.review)
  @JoinColumn({ name: 'user_id' })
  user: User;

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
