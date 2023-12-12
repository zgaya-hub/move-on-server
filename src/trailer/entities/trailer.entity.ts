import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from '@/base/EntityBase';
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
import { Movie } from '@/movie/entities/movie.entity';
import { Series } from '@/series/entities/series.entity';
import { Season } from '@/season/entities/season.entity';

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

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.trailer, { nullable: true })
  @JoinColumn()
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.trailer, { nullable: true })
  @JoinColumn()
  series: Series;

  @Field(() => Season)
  @OneToOne(() => Season, (series) => series.trailer, { nullable: true })
  @JoinColumn()
  season: Season;
}
