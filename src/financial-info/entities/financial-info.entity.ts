import { ObjectType, Field, Int } from '@nestjs/graphql';
import { DecimalColumn, JoinColumn } from '@/decorator/entity/entity.decorator';
import { Movie } from '@/movie/entities/movie.entity';
import { Entity, Index, OneToOne } from 'typeorm';
import { Series } from '@/series/entities/series.entity';
import { EntityBase } from '@/base/entity.base';

@ObjectType()
@Entity({ name: 'financial_info' })
@Index('unique_movie_series', ['movie', 'series'], { unique: true })
export class FinancialInfo extends EntityBase {
  // this should be in dollar in DB
  @Field()
  @DecimalColumn({ name: 'net_profit' })
  netProfit: number;

  // this should be in dollar in DB
  @Field()
  @DecimalColumn({ name: 'budget' })
  budget: number;

  // this should be in dollar in DB
  @Field()
  @DecimalColumn({ name: 'revenue' })
  revenue: number;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.financialInfo, { nullable: true })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.financialInfo, { nullable: true })
  @JoinColumn({ name: 'series_id' })
  series: Series;
}
