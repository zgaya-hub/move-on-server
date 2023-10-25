import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne } from 'typeorm';
import { JoinColumn } from '@/decorator/entity/entity.decorator';
import { Series } from '@/series/entities/series.entity';
import { EntityBase } from '@/base/entity.base';
import { Cast } from '@/cast/entities/cast.entity';

@ObjectType()
@Entity({ name: 'series_cast' })
export class SeriesCast extends EntityBase {
  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.seriesCast)
  @JoinColumn({ name: 'series_id' })
  series: Series;

  @Field(() => Cast)
  @ManyToOne(() => Cast, (cast) => cast.seriesCast)
  @JoinColumn({ name: 'cast_id' })
  cast: Cast;
}
