import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToMany, OneToMany, OneToOne } from 'typeorm';
import { CastRoleEnum } from '../enum/cast.enum';
import { MovieCast } from 'src/movie-cast/entities/movie-cast.entity';
import { SeriesCast } from 'src/series-cast/entities/series-cast.entity';
import { EntityBase } from 'src/base/EntityBase';
import { EnumColumn, JoinColumn } from 'src/decorator/entity/entity.decorator';
import { Cineast } from 'src/cineast/entities/cineast.entity';
import { Trailer } from 'src/trailer/entities/trailer.entity';

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
