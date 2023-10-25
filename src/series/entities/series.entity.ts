import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { EntityBase } from '@/base/entity.base';
import { Season } from '@/season/entities/season.entity';
import { Manager } from '@/manager/entities/manager.entity';
import { Media } from '@/media/entities/media.entity';
import { DecimalColumn, JoinColumn, TinyintColumn } from '@/decorator/entity/entity.decorator';
import { MediaInfo } from '@/media-info/entities/media-info.entity';
import { SeriesCast } from '@/series-cast/entities/series-cast.entity';
import { SeriesCrew } from '@/series-crew/entities/series-crew.entity';
import { MediaImage } from '@/media-image/entities/media-image.entity';
import { ExternalLink } from '@/external-link/entities/external-link.entity';
import { Review } from '@/review/entities/review.entity';

@ObjectType()
@Entity({ name: 'series' })
export class Series extends EntityBase {
  // have default value
  @Field()
  @DecimalColumn({ name: 'price' })
  price: number;

  // have default value
  @Field()
  @TinyintColumn({ name: 'is_free', default: true })
  isFree: number;

  @Field(() => MediaInfo)
  @OneToOne(() => MediaInfo, (mediaInfo) => mediaInfo.series)
  mediaInfo: MediaInfo;

  @Field(() => Manager)
  @ManyToOne(() => Manager, (manager) => manager.series)
  @JoinColumn({ name: 'manager_id' })
  manager: Manager;

  @Field(() => Media)
  @OneToMany(() => Media, (media) => media.series)
  media: Media[];

  @Field(() => SeriesCast)
  @OneToMany(() => SeriesCast, (seriesCast) => seriesCast.series)
  seriesCast: SeriesCast[];

  @Field(() => SeriesCrew)
  @OneToMany(() => SeriesCrew, (seriesCrew) => seriesCrew.series)
  seriesCrew: SeriesCrew[];

  @Field(() => MediaImage)
  @OneToMany(() => MediaImage, (mediaImage) => mediaImage.series)
  mediaImage: MediaImage[];

  @Field(() => ExternalLink)
  @OneToMany(() => ExternalLink, (externalLink) => externalLink.series)
  externalLink: ExternalLink[];

  @Field(() => Review)
  @OneToMany(() => Review, (review) => review.series)
  review: Review[];

  @Field(() => Season)
  @OneToMany(() => Season, (season) => season.series)
  season: Season[];
}
