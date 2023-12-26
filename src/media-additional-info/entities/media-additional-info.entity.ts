import { ObjectType, Field } from '@nestjs/graphql';
import { Movie } from 'src/movie/entities/movie.entity';
import { Entity, OneToOne } from 'typeorm';
import { EnumColumn, JoinColumn } from 'src/decorator/entity/entity.decorator';
import { Series } from 'src/series/entities/series.entity';
import { CountriesEnum, LanguagiesEnum } from 'src/common/enum/common.enum';
import { EntityBase } from 'src/base/EntityBase';
import { MediaGenriesEnum, MediaStatusEnum } from '../enum/media-additional-info.enum';

@ObjectType()
@Entity()
export class MediaAdditionalInfo extends EntityBase {
  @Field()
  @EnumColumn({ enum: CountriesEnum })
  mediaOriginCountry: CountriesEnum;

  @Field()
  @EnumColumn({ enum: LanguagiesEnum })
  mediaOriginalLanguage: LanguagiesEnum;

  @Field()
  @EnumColumn({ enum: MediaGenriesEnum })
  mediaGenre: MediaGenriesEnum;

  @Field()
  @EnumColumn({ enum: MediaStatusEnum })
  mediaStatus: MediaStatusEnum;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.mediaAdditionalInfo, { nullable: true })
  @JoinColumn()
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.mediaAdditionalInfo, { nullable: true })
  @JoinColumn()
  series: Series;
}
