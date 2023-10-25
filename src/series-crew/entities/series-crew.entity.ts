import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, ManyToOne, OneToOne } from 'typeorm';
import { EntityBase } from '@/base/entity.base';
import { Series } from '@/series/entities/series.entity';
import { JoinColumn } from '@/decorator/entity/entity.decorator';
import { Crew } from '@/crew/entities/crew.entity';

@ObjectType()
@Entity({ name: 'series_crew' })
export class SeriesCrew extends EntityBase {
  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.seriesCrew)
  @JoinColumn({ name: 'series_id' })
  series: Series;

  @Field(() => Crew)
  @ManyToOne(() => Crew, (crew) => crew.seriesCrew)
  @JoinColumn({ name: 'crew_id' })
  crew: Crew;
}
