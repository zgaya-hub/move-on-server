import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from 'src/base/EntityBase';
import { Cineast } from 'src/cineast/entities/cineast.entity';
import { JoinColumn } from 'src/decorator/entity/entity.decorator';
import { Trailer } from 'src/trailer/entities/trailer.entity';
import { Entity, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class TrailerCineast extends EntityBase {
  @Field(() => Trailer)
  @ManyToOne(() => Trailer, (trailer) => trailer.trailerCineast)
  @JoinColumn()
  trailer: Trailer;

  @Field(() => Cineast)
  @ManyToOne(() => Cineast, (cineast) => cineast.trailerCineast)
  @JoinColumn()
  cineast: Cineast;
}
