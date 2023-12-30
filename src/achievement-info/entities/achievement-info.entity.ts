import { ObjectType, Field } from '@nestjs/graphql';
import { ArrayColumn, DecimalColumn, JoinColumn } from 'src/decorator/entity/entity.decorator';
import { Movie } from 'src/movie/entities/movie.entity';
import { Entity, OneToOne } from 'typeorm';
import { Series } from 'src/series/entities/series.entity';
import { EntityBase } from 'src/base/EntityBase';

@ObjectType()
@Entity()
export class AchievementInfo extends EntityBase {
  @Field()
  @DecimalColumn()
  IMDbRating: number;

  @Field()
  @DecimalColumn()
  OMDbRating: number;

  @Field(() => [String])
  @ArrayColumn()
  award: Array<string>;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.achievementInfo, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.achievementInfo, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  series: Series;
}
