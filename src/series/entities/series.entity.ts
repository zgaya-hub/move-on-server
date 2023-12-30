import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { EntityBase } from 'src/base/EntityBase';
import { Season } from 'src/season/entities/season.entity';
import { Manager } from 'src/manager/entities/manager.entity';
import { DecimalColumn, JoinColumn, TinyintColumn } from 'src/decorator/entity/entity.decorator';
import { SeriesCast } from 'src/series-cast/entities/series-cast.entity';
import { SeriesCrew } from 'src/series-crew/entities/series-crew.entity';
import { MediaImage } from 'src/media-image/entities/media-image.entity';
import { ExternalLink } from 'src/external-link/entities/external-link.entity';
import { Review } from 'src/review/entities/review.entity';
import { AchievementInfo } from 'src/achievement-info/entities/achievement-info.entity';
import { FinancialInfo } from 'src/financial-info/entities/financial-info.entity';
import { MediaAdditionalInfo } from 'src/media-additional-info/entities/media-additional-info.entity';
import { MediaBasicInfo } from 'src/media-basic-info/entities/media-basic-info.entity';
import { Trailer } from 'src/trailer/entities/trailer.entity';

@ObjectType()
@Entity()
export class Series extends EntityBase {
  // have default value
  @Field()
  @DecimalColumn()
  priceInDollar: number;

  // have default value
  @Field()
  @TinyintColumn({ default: true })
  isFree: number;

  @Field(() => AchievementInfo)
  @OneToOne(() => AchievementInfo, (achievementInfo) => achievementInfo.series)
  achievementInfo: AchievementInfo;

  @Field(() => FinancialInfo)
  @OneToOne(() => FinancialInfo, (financialInfo) => financialInfo.series)
  financialInfo: FinancialInfo;

  @Field(() => MediaAdditionalInfo)
  @OneToOne(() => MediaAdditionalInfo, (mediaAdditionalInfo) => mediaAdditionalInfo.series)
  mediaAdditionalInfo: MediaAdditionalInfo;

  @Field(() => MediaBasicInfo)
  @OneToOne(() => MediaBasicInfo, (mediaBasicInfo) => mediaBasicInfo.series)
  mediaBasicInfo: MediaBasicInfo;

  @Field(() => Trailer)
  @OneToOne(() => Trailer, (trailer) => trailer.series)
  trailer: Trailer;

  @Field(() => Manager)
  @ManyToOne(() => Manager, (manager) => manager.series)
  @JoinColumn()
  manager: Manager;

  @Field(() => SeriesCast)
  @OneToMany(() => SeriesCast, (seriesCast) => seriesCast.series)
  seriesCast: SeriesCast[];

  @Field(() => SeriesCrew)
  @OneToMany(() => SeriesCrew, (seriesCrew) => seriesCrew.series)
  seriesCrew: SeriesCrew[];

  @Field(() => MediaImage)
  @OneToOne(() => MediaImage, (mediaImage) => mediaImage.series)
  mediaImage: MediaImage;

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
