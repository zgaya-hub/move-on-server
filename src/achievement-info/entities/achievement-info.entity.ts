import { ObjectType, Field } from '@nestjs/graphql';
import { ArrayColumn, DecimalColumn, JoinColumn } from '@/decorator/entity/entity.decorator';
import { Movie } from '@/movie/entities/movie.entity';
import { Entity, Index, OneToOne } from 'typeorm';
import { Series } from '@/series/entities/series.entity';
import { EntityBase } from '@/base/entity.base';

@ObjectType()
@Entity({ name: 'achievement_info' })
@Index('unique_movie_series', ['movie', 'series'], { unique: true })
export class AchievementInfo extends EntityBase {
  @Field()
  @DecimalColumn({ name: 'IMDb_rating' })
  IMDbRating: number;

  @Field()
  @DecimalColumn({ name: 'OMDb_rating' })
  OMDbRating: number;

  @Field(() => [String])
  @ArrayColumn({ name: 'award' })
  award: Array<string>;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.achievementInfo, { nullable: true })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.achievementInfo, { nullable: true })
  @JoinColumn({ name: 'series_id' })
  series: Series;
}
