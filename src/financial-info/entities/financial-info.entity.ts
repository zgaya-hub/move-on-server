import { ObjectType, Field } from '@nestjs/graphql';
import { DecimalColumn, JoinColumn } from 'src/decorator/entity/entity.decorator';
import { Movie } from 'src/movie/entities/movie.entity';
import { Entity, OneToOne } from 'typeorm';
import { Series } from 'src/series/entities/series.entity';
import { EntityBase } from 'src/base/EntityBase';

@ObjectType()
@Entity()
export class FinancialInfo extends EntityBase {
  // this should be in dollar in DB
  @Field()
  @DecimalColumn()
  netProfit: number;

  // this should be in dollar in DB
  @Field()
  @DecimalColumn()
  budget: number;

  // this should be in dollar in DB
  @Field()
  @DecimalColumn()
  revenue: number;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.financialInfo, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.financialInfo, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  series: Series;
}
