import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from '@/base/entity.base';
import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Season } from '@/season/entities/season.entity';
import { Media } from '@/media/entities/media.entity';
// import { DecimalColumn, IntColumn, JoinColumn, VarcharColumn } from ;
import { MediaImage } from '@/media-image/entities/media-image.entity';
import { ExternalLink } from '@/external-link/entities/external-link.entity';
import { Review } from '@/review/entities/review.entity';
import { DecimalColumn, IntColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';

@ObjectType()
@Entity({ name: 'episode' })
export class Episode extends EntityBase {
  @Field()
  @VarcharColumn({ name: 'title' })
  title: string;

  @Field()
  @IntColumn({ name: 'episode_no' })
  episodeNo: number;

  @Field()
  @IntColumn({ name: 'release_date' })
  releaseDate: number;

  // in milliseconds
  @Field()
  @IntColumn({ name: 'run_time' })
  runTime: number;

  @Field()
  @DecimalColumn({ name: 'IMDb_rating' })
  IMDbRating: number;

  // JOIN COLUMNS //

  @Field(() => Season)
  @ManyToOne(() => Season, (season) => season.episode)
  @JoinColumn({ name: 'season_id' })
  season: Season;

  @Field(() => [Media])
  @OneToMany(() => Media, (media) => media.episode)
  media: Media[];

  @Field(() => [MediaImage])
  @OneToMany(() => MediaImage, (mediaImage) => mediaImage.episode)
  mediaImage: MediaImage[];

  @Field(() => [ExternalLink])
  @OneToMany(() => ExternalLink, (externalLink) => externalLink.episode)
  externalLink: ExternalLink[];

  @Field(() => [Review])
  @OneToMany(() => Review, (review) => review.episode)
  review: Review[];
}
