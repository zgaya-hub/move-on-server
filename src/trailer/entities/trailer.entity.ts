import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from '@/base/entity.base';
import { JoinColumn } from '@/decorator/entity/entity.decorator';
import { Entity, ManyToMany, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { MediaBasicInfo } from '@/media-basic-info/entities/media-basic-info.entity';
import { Video } from '@/video/entities/video.entity';
import { Manager } from '@/manager/entities/manager.entity';
import { Cast } from '@/cast/entities/cast.entity';
import { Crew } from '@/crew/entities/crew.entity';
import { MediaImage } from '@/media-image/entities/media-image.entity';
import { ExternalLink } from '@/external-link/entities/external-link.entity';
import { Review } from '@/review/entities/review.entity';
import { MediaResource } from '@/media-resource/entities/media-resource.entity';

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

  @Field(() => MediaResource)
  @OneToOne(() => MediaResource, (mediaResource) => mediaResource.trailer)
  mediaResource: MediaResource;

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
