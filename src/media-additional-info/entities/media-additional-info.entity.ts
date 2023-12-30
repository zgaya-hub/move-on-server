import { ObjectType, Field } from '@nestjs/graphql';
import { Movie } from 'src/movie/entities/movie.entity';
import { Entity, OneToOne } from 'typeorm';
import { EnumColumn, JoinColumn } from 'src/decorator/entity/entity.decorator';
import { Series } from 'src/series/entities/series.entity';
import { MediaCountriesEnum, MediaLanguagiesEnum } from 'src/common/enum/common.enum';
import { EntityBase } from 'src/base/EntityBase';
import { MediaGenriesEnum, MediaStatusEnum } from '../enum/media-additional-info.enum';

@ObjectType()
@Entity()
export class MediaAdditionalInfo extends EntityBase {
  @Field()
  @EnumColumn({ enum: MediaCountriesEnum, default: MediaCountriesEnum.UNITED_KINGDOM })
  originCountry: MediaCountriesEnum;

  @Field()
  @EnumColumn({ enum: MediaLanguagiesEnum, default: MediaLanguagiesEnum.ENGLISH })
  originalLanguage: MediaLanguagiesEnum;

  @Field()
  @EnumColumn({ enum: MediaGenriesEnum, default: MediaGenriesEnum.ACTION })
  genre: MediaGenriesEnum;

  @Field()
  @EnumColumn({ enum: MediaStatusEnum, default: MediaStatusEnum.RELEASED })
  status: MediaStatusEnum;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.mediaAdditionalInfo, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.mediaAdditionalInfo, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  series: Series;
}
