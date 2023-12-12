import { ObjectType, Field } from '@nestjs/graphql';
import { DecimalColumn, JoinColumn } from '@/decorator/entity/entity.decorator';
import { Movie } from '@/movie/entities/movie.entity';
import { Entity, OneToOne } from 'typeorm';
import { Series } from '@/series/entities/series.entity';
import { EntityBase } from '@/base/EntityBase';

@ObjectType()
@Entity()
export class FinancialInfo extends EntityBase {
  // this should be in dollar in DB
  @Field()
  @DecimalColumn()
  mediaNetProfit: number;

  // this should be in dollar in DB
  @Field()
  @DecimalColumn()
  mediaBudget: number;

  // this should be in dollar in DB
  @Field()
  @DecimalColumn()
  mediaRevenue: number;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.financialInfo, { nullable: true })
  @JoinColumn()
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.financialInfo, { nullable: true })
  @JoinColumn()
  series: Series;
}
