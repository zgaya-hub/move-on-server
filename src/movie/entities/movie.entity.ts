import { Entity, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from '@/base/entity.base';
import { Manager } from '@/manager/entities/manager.entity';
import { MediaInfo } from '@/media-info/entities/media-info.entity';
import { Media } from '@/media/entities/media.entity';
import { DecimalColumn, JoinColumn, TinyintColumn } from '@/decorator/entity/entity.decorator';
import { MovieCast } from '@/movie-cast/entities/movie-cast.entity';
import { MovieCrew } from '@/movie-crew/entities/movie-crew.entity';
import { MediaImage } from '@/media-image/entities/media-image.entity';
import { ExternalLink } from '@/external-link/entities/external-link.entity';
import { Review } from '@/review/entities/review.entity';

@ObjectType()
@Entity({ name: 'movie' })
export class Movie extends EntityBase {
  // have default value
  @Field()
  @DecimalColumn({ name: 'price' })
  price: number;

  // have default value
  @Field()
  @TinyintColumn({ name: 'is_free', default: true })
  isFree: number;

  // JOIN COLUMNS //

  @Field(() => MediaInfo)
  @OneToOne(() => MediaInfo, (mediaInfo) => mediaInfo.movie)
  mediaInfo: MediaInfo;

  @Field(() => Manager)
  @ManyToOne(() => Manager, (manager) => manager.movie)
  @JoinColumn({ name: 'manager_id' })
  manager: Manager;

  @Field(() => Media)
  @OneToMany(() => Media, (media) => media.movie)
  media: Media[];

  @Field(() => MovieCast)
  @OneToMany(() => MovieCast, (movieCast) => movieCast.movie)
  movieCast: MovieCast[];

  @Field(() => MovieCrew)
  @OneToMany(() => MovieCrew, (movieCrew) => movieCrew.movie)
  movieCrew: MovieCrew[];

  @Field(() => MediaImage)
  @OneToMany(() => MediaImage, (mediaImage) => mediaImage.movie)
  mediaImage: MediaImage[];

  @Field(() => ExternalLink)
  @OneToMany(() => ExternalLink, (externalLink) => externalLink.movie)
  externalLink: ExternalLink[];

  @Field(() => Review)
  @OneToMany(() => Review, (review) => review.movie)
  review: Review[];
}
