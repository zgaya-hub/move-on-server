import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from 'src/base/EntityBase';
import { Cineast } from 'src/cineast/entities/cineast.entity';
import { JoinColumn } from 'src/decorator/entity/entity.decorator';
import { Series } from 'src/series/entities/series.entity';
import { Entity, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class SeriesCineast extends EntityBase {
  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.seriesCineast)
  @JoinColumn()
  series: Series;

  @Field(() => Cineast)
  @ManyToOne(() => Cineast, (cineast) => cineast.seriesCineast)
  @JoinColumn()
  cineast: Cineast;
}
