import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from 'src/base/EntityBase';
import { Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Season } from 'src/season/entities/season.entity';
import { MediaImage } from 'src/media-image/entities/media-image.entity';
import { ExternalLink } from 'src/external-link/entities/external-link.entity';
import { Review } from 'src/review/entities/review.entity';
import { IntColumn } from 'src/decorator/entity/entity.decorator';
import { MediaBasicInfo } from 'src/media-basic-info/entities/media-basic-info.entity';
import { Video } from 'src/video/entities/video.entity';
import { MediaResource } from 'src/media-resource/entities/media-resource.entity';

@ObjectType()
@Entity()
export class Episode extends EntityBase {
  @Field()
  @IntColumn()
  episodeNumber: number;

  // JOIN COLUMNS //
  @Field(() => MediaBasicInfo)
  @OneToOne(() => MediaBasicInfo, (mediaBasicInfo) => mediaBasicInfo.episode)
  mediaBasicInfo: MediaBasicInfo;

  @Field(() => Season)
  @ManyToOne(() => Season, (season) => season.episode, { onDelete: 'CASCADE' })
  @JoinColumn()
  season: Season;

  @Field(() => Video)
  @OneToOne(() => Video, (video) => video.episode)
  video: Video;

  @Field(() => MediaResource)
  @OneToOne(() => MediaResource, (mediaResource) => mediaResource.episode)
  mediaResource: MediaResource;

  @Field(() => MediaImage)
  @OneToOne(() => MediaImage, (mediaImage) => mediaImage.episode)
  mediaImage: MediaImage;

  @Field(() => [ExternalLink])
  @OneToMany(() => ExternalLink, (externalLink) => externalLink.episode)
  externalLink: ExternalLink[];

  @Field(() => [Review])
  @OneToMany(() => Review, (review) => review.episode)
  review: Review[];
}
