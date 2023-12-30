import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne } from 'typeorm';
import { DecimalColumn, JoinColumn, TextColumn } from 'src/decorator/entity/entity.decorator';
import { EntityBase } from 'src/base/EntityBase';
import { User } from 'src/user/entities/user.entity';
import { Episode } from 'src/episode/entities/episode.entity';
import { Series } from 'src/series/entities/series.entity';
import { Movie } from 'src/movie/entities/movie.entity';
import { Trailer } from 'src/trailer/entities/trailer.entity';

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
  @ManyToOne(() => Episode, (episode) => episode.review, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  episode: Episode;

  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.review, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  series: Series;

  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.review, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  movie: Movie;

  @Field(() => Trailer)
  @ManyToOne(() => Trailer, (trailer) => trailer.review, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  trailer: Trailer;
}
