import { ObjectType, Field, Int } from '@nestjs/graphql';
import { EntityBase } from '../../base/entity.base';
import { DecimalColumn, JoinColumn, TinyintColumn } from '../../decorator/entity/entity.decorator';
import { FinancialInfo } from '../../financial-info/entities/financial-info.entity';
import { Entity, ManyToMany, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { MediaBasicInfo } from '../../media-basic-info/entities/media-basic-info.entity';
import { MediaAdditionalInfo } from '../../media-additional-info/entities/media-additional-info.entity';
import { Video } from '../../video/entities/video.entity';
import { Manager } from '../../manager/entities/manager.entity';
import { Media } from '../../media/entities/media.entity';
import { Cast } from '../../cast/entities/cast.entity';
import { Crew } from '../../crew/entities/crew.entity';
import { MediaImage } from '../../media-image/entities/media-image.entity';
import { ExternalLink } from '../../external-link/entities/external-link.entity';
import { Review } from '../../review/entities/review.entity';

@ObjectType()
@Entity()
export class Trailer extends EntityBase {
  // JOIN COLUMNS //
  @Field(() => MediaBasicInfo)
  @OneToOne(() => MediaBasicInfo, (mediaBasicInfo) => mediaBasicInfo.trailer)
  mediaBasicInfo: MediaBasicInfo;

  @Field(() => Video)
  @OneToOne(() => Video, (video) => video.trailer)
  video: Video;

  @Field(() => Manager)
  @ManyToOne(() => Manager, (manager) => manager.trailer)
  @JoinColumn()
  manager: Manager;

  @Field(() => Media)
  @OneToOne(() => Media, (media) => media.trailer)
  media: Media;

  @Field(() => [Cast])
  @ManyToMany(() => Cast, (cast) => cast.trailer)
  cast: Cast[];

  @Field(() => Crew)
  @ManyToMany(() => Crew, (crew) => crew.trailer)
  crew: Crew[];

  @Field(() => [MediaImage])
  @OneToMany(() => MediaImage, (mediaImage) => mediaImage.trailer)
  mediaImage: MediaImage[];

  @Field(() => [ExternalLink])
  @OneToMany(() => ExternalLink, (externalLink) => externalLink.trailer)
  externalLink: ExternalLink[];

  @Field(() => [Review])
  @OneToMany(() => Review, (review) => review.trailer)
  review: Review[];
}
