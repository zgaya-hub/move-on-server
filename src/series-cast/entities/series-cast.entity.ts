import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne } from 'typeorm';
import { JoinColumn } from '@/decorator/entity/entity.decorator';
import { Series } from '@/series/entities/series.entity';
import { EntityBase } from '@/base/EntityBase';
import { Cast } from '@/cast/entities/cast.entity';

@ObjectType()
@Entity()
export class SeriesCast extends EntityBase {
  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.seriesCast)
  @JoinColumn()
  series: Series;

  @Field(() => Cast)
  @ManyToOne(() => Cast, (cast) => cast.seriesCast)
  @JoinColumn()
  cast: Cast;
}
