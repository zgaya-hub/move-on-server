import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne } from 'typeorm';
import { DecimalColumn, JoinColumn, TextColumn } from '@/decorator/entity/entity.decorator';
import { EntityBase } from '@/base/EntityBase';
import { User } from '@/user/entities/user.entity';
import { Episode } from '@/episode/entities/episode.entity';
import { Series } from '@/series/entities/series.entity';
import { Movie } from '@/movie/entities/movie.entity';
import { Trailer } from '@/trailer/entities/trailer.entity';

@ObjectType()
@Entity()
export class Review extends EntityBase {
  @Field()
  @DecimalColumn()
  reviewRating: number;

  @Field()
  @TextColumn()
  reviewComment: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.review)
  @JoinColumn()
  user: User;

  @Field(() => Episode)
  @ManyToOne(() => Episode, (episode) => episode.review, { nullable: true })
  @JoinColumn()
  episode: Episode;

  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.review, { nullable: true })
  @JoinColumn()
  series: Series;

  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.review, { nullable: true })
  @JoinColumn()
  movie: Movie;

  @Field(() => Trailer)
  @ManyToOne(() => Trailer, (trailer) => trailer.review, { nullable: true })
  @JoinColumn()
  trailer: Trailer;
}
