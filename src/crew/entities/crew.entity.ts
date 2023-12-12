import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToMany, OneToMany, OneToOne } from 'typeorm';
import { Cineast } from '@/cineast/entities/cineast.entity';
import { EntityBase } from '@/base/EntityBase';
import { CrewRoleEnum } from '../enum/crew.enum';
import { MovieCrew } from '@/movie-crew/entities/movie-crew.entity';
import { SeriesCrew } from '@/series-crew/entities/series-crew.entity';
import { EnumColumn, JoinColumn } from '@/decorator/entity/entity.decorator';
import { Trailer } from '@/trailer/entities/trailer.entity';

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

  @Field(() => [Trailer])
  @ManyToMany(() => Trailer, (trailer) => trailer.crew)
  @JoinColumn()
  trailer: Trailer[];

  @Field(() => Cineast)
  @OneToOne(() => Cineast, (cineast) => cineast.crew)
  cineast: Cineast;
}
