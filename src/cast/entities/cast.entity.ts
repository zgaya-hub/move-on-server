import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, OneToMany, OneToOne } from 'typeorm';
import { CastRoleEnum } from '../enum/cast.enum';
import { MovieCast } from '@/movie-cast/entities/movie-cast.entity';
import { SeriesCast } from '@/series-cast/entities/series-cast.entity';
import { EntityBase } from '@/base/entity.base';
import { EnumColumn } from '@/decorator/entity/entity.decorator';
import { Cineast } from '@/cineast/entities/cineast.entity';

@ObjectType()
@Entity({ name: 'cast' })
export class Cast extends EntityBase {
  @Field()
  @EnumColumn({ name: 'role', enum: CastRoleEnum })
  role: CastRoleEnum;

  @Field(() => MovieCast)
  @OneToMany(() => MovieCast, (movieCast) => movieCast.cast)
  movieCast: MovieCast[];

  @Field(() => SeriesCast)
  @OneToMany(() => SeriesCast, (seriesCast) => seriesCast.cast)
  seriesCast: SeriesCast[];

  @Field(() => Cineast)
  @OneToOne(() => Cineast, (cineast) => cineast.cast)
  cineast: Cineast;
}
