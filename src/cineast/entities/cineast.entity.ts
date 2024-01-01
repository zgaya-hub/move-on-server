import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from 'src/base/EntityBase';
import { Entity, OneToMany } from 'typeorm';
import { MediaCountriesEnum, GenderEnum } from 'src/common/enum/common.enum';
import { ArrayColumn, EnumColumn, IntColumn, TextColumn, VarcharColumn } from 'src/decorator/entity/entity.decorator';
import { CineastProfessionEnum } from '../enum/cineast.enum';
import { MovieCineast } from 'src/movie-cineast/entities/movie-cineast.entity';
import { SeriesCineast } from 'src/series-cineast/entities/series-cineast.entity';
import { TrailerCineast } from 'src/trailer-cineast/entities/trailer-cineast.entity';
import { ExternalLink } from 'src/external-link/entities/external-link.entity';

@ObjectType()
@Entity()
export class Cineast extends EntityBase {
  @Field()
  @VarcharColumn()
  fullName: string;

  @Field()
  @EnumColumn({ enum: CineastProfessionEnum })
  profession: CineastProfessionEnum;

  @Field()
  @IntColumn()
  DOB: number;

  @Field()
  @TextColumn()
  bio: string;

  @Field()
  @EnumColumn({ enum: GenderEnum })
  gender: GenderEnum;

  @Field()
  @EnumColumn({ enum: MediaCountriesEnum })
  country: MediaCountriesEnum;

  @Field(() => [String])
  @ArrayColumn()
  award: Array<string>;

  @Field(() => MovieCineast)
  @OneToMany(() => MovieCineast, (movieCineast) => movieCineast.cineast)
  movieCineast: MovieCineast[];

  @Field(() => SeriesCineast)
  @OneToMany(() => SeriesCineast, (seriesCineast) => seriesCineast.cineast)
  seriesCineast: SeriesCineast[];

  @Field(() => TrailerCineast)
  @OneToMany(() => TrailerCineast, (trailerCineast) => trailerCineast.cineast)
  trailerCineast: TrailerCineast[];

  @Field(() => ExternalLink)
  @OneToMany(() => ExternalLink, (externalLink) => externalLink.cineast)
  externalLink: ExternalLink[];
}
