import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from '@/base/entity.base';
import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { Episode } from '@/episode/entities/episode.entity';
import { Series } from '@/series/entities/series.entity';
import { Media } from '@/media/entities/media.entity';
import { IntColumn, JoinColumn, TextColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { MediaImage } from '@/media-image/entities/media-image.entity';

@ObjectType()
@Entity({ name: 'season' })
export class Season extends EntityBase {
  @Field()
  @VarcharColumn({ name: 'title' })
  title: string;

  @Field()
  @IntColumn({ name: 'season_no' })
  seasonNo: number;

  @Field()
  @IntColumn({ name: 'release_date' })
  releaseDate: number;

  @Field()
  @TextColumn({ name: 'plot_summary' })
  plotSummary: string;

  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.season)
  @JoinColumn({ name: 'series_id' })
  series: Series;

  @Field(() => Media)
  @OneToMany(() => Media, (media) => media.season)
  media: Media[];

  @Field(() => MediaImage)
  @OneToMany(() => MediaImage, (mediaImage) => mediaImage.season)
  mediaImage: MediaImage[];

  @Field(() => Episode)
  @OneToMany(() => Episode, (episode) => episode.season)
  episode: Episode[];
}
