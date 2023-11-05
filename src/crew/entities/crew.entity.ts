import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, OneToMany, OneToOne } from 'typeorm';
import { Cineast } from '@/cineast/entities/cineast.entity';
import { EntityBase } from '@/base/entity.base';
import { CrewRoleEnum } from '../enum/crew.enum';
import { MovieCrew } from '@/movie-crew/entities/movie-crew.entity';
import { SeriesCrew } from '@/series-crew/entities/series-crew.entity';
import { EnumColumn } from '@/decorator/entity/entity.decorator';

@ObjectType()
@Entity()
export class Crew extends EntityBase {
  @Field()
  @EnumColumn({ enum: CrewRoleEnum })
  crewRole: CrewRoleEnum;

  @Field(() => MovieCrew)
  @OneToMany(() => MovieCrew, (movieCrew) => movieCrew.crew)
  movieCrew: MovieCrew[];

  @Field(() => SeriesCrew)
  @OneToMany(() => SeriesCrew, (seriesCrew) => seriesCrew.crew)
  seriesCrew: SeriesCrew[];

  @Field(() => Cineast)
  @OneToOne(() => Cineast, (cineast) => cineast.crew)
  cineast: Cineast;
}
