import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne } from 'typeorm';
import { EntityBase } from '@/base/EntityBase';
import { Series } from '@/series/entities/series.entity';
import { JoinColumn } from '@/decorator/entity/entity.decorator';
import { Crew } from '@/crew/entities/crew.entity';

@ObjectType()
@Entity()
export class SeriesCrew extends EntityBase {
  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.seriesCrew)
  @JoinColumn()
  series: Series;

  @Field(() => Crew)
  @ManyToOne(() => Crew, (crew) => crew.seriesCrew)
  @JoinColumn()
  crew: Crew;
}
