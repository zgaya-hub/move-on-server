import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from '@/base/entity.base';
import { Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Season } from '@/season/entities/season.entity';
import { Media } from '@/media/entities/media.entity';
import { MediaImage } from '@/media-image/entities/media-image.entity';
import { ExternalLink } from '@/external-link/entities/external-link.entity';
import { Review } from '@/review/entities/review.entity';
import { IntColumn } from '@/decorator/entity/entity.decorator';
import { MediaBasicInfo } from '@/media-basic-info/entities/media-basic-info.entity';
import { Video } from '../../video/entities/video.entity';

@ObjectType()
@Entity({ name: 'episode' })
export class Episode extends EntityBase {
  @Field()
  @IntColumn({ name: 'episode_no' })
  episodeNo: number;

  // JOIN COLUMNS //
  @Field(() => MediaBasicInfo)
  @OneToOne(() => MediaBasicInfo, (mediaBasicInfo) => mediaBasicInfo.episode)
  mediaBasicInfo: MediaBasicInfo;

  @Field(() => Season)
  @ManyToOne(() => Season, (season) => season.episode)
  @JoinColumn({ name: 'season_id' })
  season: Season;

  @Field(() => Video)
  @OneToOne(() => Video, (video) => video.episode)
  video: Video;

  @Field(() => [Media])
  @OneToMany(() => Media, (media) => media.episode)
  media: Media[];

  @Field(() => [MediaImage])
  @OneToMany(() => MediaImage, (mediaImage) => mediaImage.mediaImageEpisode)
  mediaImage: MediaImage[];

  @Field(() => [ExternalLink])
  @OneToMany(() => ExternalLink, (externalLink) => externalLink.episode)
  externalLink: ExternalLink[];

  @Field(() => [Review])
  @OneToMany(() => Review, (review) => review.episode)
  review: Review[];
}
