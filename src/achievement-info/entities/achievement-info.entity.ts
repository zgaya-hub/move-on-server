import { ObjectType, Field } from '@nestjs/graphql';
import { ArrayColumn, DecimalColumn, JoinColumn } from '@/decorator/entity/entity.decorator';
import { Movie } from '@/movie/entities/movie.entity';
import { Entity, OneToOne } from 'typeorm';
import { Series } from '@/series/entities/series.entity';
import { EntityBase } from '@/base/EntityBase';

@ObjectType()
@Entity()
export class AchievementInfo extends EntityBase {
  @Field()
  @DecimalColumn()
  mediaIMDbRating: number;

  @Field()
  @DecimalColumn()
  mediaOMDbRating: number;

  @Field(() => [String])
  @ArrayColumn()
  mediaAward: Array<string>;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.achievementInfo, { nullable: true })
  @JoinColumn()
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.achievementInfo, { nullable: true })
  @JoinColumn()
  series: Series;
}
