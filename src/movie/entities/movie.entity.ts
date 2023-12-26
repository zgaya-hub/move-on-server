import { Entity, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from 'src/base/EntityBase';
import { Manager } from 'src/manager/entities/manager.entity';
import { DecimalColumn, JoinColumn, TinyintColumn } from 'src/decorator/entity/entity.decorator';
import { MovieCast } from 'src/movie-cast/entities/movie-cast.entity';
import { MovieCrew } from 'src/movie-crew/entities/movie-crew.entity';
import { MediaImage } from 'src/media-image/entities/media-image.entity';
import { ExternalLink } from 'src/external-link/entities/external-link.entity';
import { Review } from 'src/review/entities/review.entity';
import { AchievementInfo } from 'src/achievement-info/entities/achievement-info.entity';
import { FinancialInfo } from 'src/financial-info/entities/financial-info.entity';
import { Video } from 'src/video/entities/video.entity';
import { MediaBasicInfo } from 'src/media-basic-info/entities/media-basic-info.entity';
import { MediaAdditionalInfo } from 'src/media-additional-info/entities/media-additional-info.entity';
import { MediaResource } from 'src/media-resource/entities/media-resource.entity';
import { Trailer } from 'src/trailer/entities/trailer.entity';

@ObjectType()
@Entity()
export class Movie extends EntityBase {
  // have default value
  @Field()
  @DecimalColumn()
  moviePriceInDollar: number;

  // have default value
  @Field()
  @TinyintColumn({ default: true })
  movieIsFree: boolean;

  // JOIN COLUMNS //
  @Field(() => AchievementInfo)
  @OneToOne(() => AchievementInfo, (achievementInfo) => achievementInfo.movie)
  achievementInfo: AchievementInfo;

  @Field(() => FinancialInfo)
  @OneToOne(() => FinancialInfo, (financialInfo) => financialInfo.movie)
  financialInfo: FinancialInfo;

  @Field(() => MediaBasicInfo)
  @OneToOne(() => MediaBasicInfo, (mediaBasicInfo) => mediaBasicInfo.movie)
  mediaBasicInfo: MediaBasicInfo;

  @Field(() => MediaAdditionalInfo)
  @OneToOne(() => MediaAdditionalInfo, (mediaAdditionalInfo) => mediaAdditionalInfo.movie)
  mediaAdditionalInfo: MediaAdditionalInfo;

  @Field(() => Video)
  @OneToOne(() => Video, (video) => video.movie)
  video: Video;

  @Field(() => Manager)
  @ManyToOne(() => Manager, (manager) => manager.movie)
  @JoinColumn()
  manager: Manager;

  @Field(() => MediaResource)
  @OneToOne(() => MediaResource, (mediaResource) => mediaResource.movie)
  mediaResource: MediaResource;

  @Field(() => Trailer)
  @OneToOne(() => Trailer, (trailer) => trailer.movie)
  trailer: Trailer;

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
