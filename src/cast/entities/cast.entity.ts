import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToMany, OneToMany, OneToOne } from 'typeorm';
import { CastRoleEnum } from '../enum/cast.enum';
import { MovieCast } from '@/movie-cast/entities/movie-cast.entity';
import { SeriesCast } from '@/series-cast/entities/series-cast.entity';
import { EntityBase } from '@/base/entity.base';
import { EnumColumn, JoinColumn } from '@/decorator/entity/entity.decorator';
import { Cineast } from '@/cineast/entities/cineast.entity';
import { Trailer } from '@/trailer/entities/trailer.entity';

@ObjectType()
@Entity()
export class Cast extends EntityBase {
  @Field()
  @EnumColumn({ enum: CastRoleEnum })
  castRole: CastRoleEnum;

  @Field(() => MovieCast)
  @OneToMany(() => MovieCast, (movieCast) => movieCast.cast)
  movieCast: MovieCast[];

  @Field(() => SeriesCast)
  @OneToMany(() => SeriesCast, (seriesCast) => seriesCast.cast)
  seriesCast: SeriesCast[];

  @Field(() => [Trailer])
  @ManyToMany(() => Trailer, (trailer) => trailer.cast)
  @JoinColumn()
  trailer: Trailer[];

  @Field(() => Cineast)
  @OneToOne(() => Cineast, (cineast) => cineast.cast)
  cineast: Cineast;
}
