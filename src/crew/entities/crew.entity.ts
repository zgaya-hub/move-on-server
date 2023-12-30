import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToMany, OneToMany, OneToOne } from 'typeorm';
import { Cineast } from 'src/cineast/entities/cineast.entity';
import { EntityBase } from 'src/base/EntityBase';
import { CrewRoleEnum } from '../enum/crew.enum';
import { MovieCrew } from 'src/movie-crew/entities/movie-crew.entity';
import { SeriesCrew } from 'src/series-crew/entities/series-crew.entity';
import { EnumColumn, JoinColumn } from 'src/decorator/entity/entity.decorator';
import { Trailer } from 'src/trailer/entities/trailer.entity';

@ObjectType()
@Entity()
export class Crew extends EntityBase {
  @Field()
  @EnumColumn({ enum: CrewRoleEnum })
  role: CrewRoleEnum;

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
