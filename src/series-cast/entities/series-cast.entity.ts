import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne } from 'typeorm';
import { JoinColumn } from 'src/decorator/entity/entity.decorator';
import { Series } from 'src/series/entities/series.entity';
import { EntityBase } from 'src/base/EntityBase';
import { Cast } from 'src/cast/entities/cast.entity';

@ObjectType()
@Entity()
export class SeriesCast extends EntityBase {
  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.seriesCast, { onDelete: 'CASCADE' })
  @JoinColumn()
  series: Series;

  @Field(() => Cast)
  @ManyToOne(() => Cast, (cast) => cast.seriesCast, { onDelete: 'CASCADE' })
  @JoinColumn()
  cast: Cast;
}
