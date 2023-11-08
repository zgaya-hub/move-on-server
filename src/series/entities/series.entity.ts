import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { EntityBase } from '@/base/entity.base';
import { Season } from '@/season/entities/season.entity';
import { Manager } from '@/manager/entities/manager.entity';
import { Media } from '@/media/entities/media.entity';
import { DecimalColumn, JoinColumn, TinyintColumn } from '@/decorator/entity/entity.decorator';
import { SeriesCast } from '@/series-cast/entities/series-cast.entity';
import { SeriesCrew } from '@/series-crew/entities/series-crew.entity';
import { MediaImage } from '@/media-image/entities/media-image.entity';
import { ExternalLink } from '@/external-link/entities/external-link.entity';
import { Review } from '@/review/entities/review.entity';
import { AchievementInfo } from '@/achievement-info/entities/achievement-info.entity';
import { FinancialInfo } from '@/financial-info/entities/financial-info.entity';
import { MediaAdditionalInfo } from '@/media-additional-info/entities/media-additional-info.entity';
import { MediaBasicInfo } from '@/media-basic-info/entities/media-basic-info.entity';

@ObjectType()
@Entity()
export class Series extends EntityBase {
  // have default value
  @Field()
  @DecimalColumn()
  seriesPriceInDollar: number;

  // have default value
  @Field()
  @TinyintColumn({ default: true })
  seriesIsFree: number;

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
