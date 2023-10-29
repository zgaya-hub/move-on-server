import { ObjectType, Field } from '@nestjs/graphql';
import { IntColumn, JoinColumn, TextColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { Entity, OneToOne } from 'typeorm';
import { Movie } from '@/movie/entities/movie.entity';
import { Series } from '@/series/entities/series.entity';
import { EntityBase } from '@/base/entity.base';
import { Season } from '@/season/entities/season.entity';
import { Episode } from '@/episode/entities/episode.entity';

@ObjectType()
@Entity({ name: 'media_basic_info' })
export class MediaBasicInfo extends EntityBase {
  @Field()
  @VarcharColumn({ name: 'title' })
  title: string;

  // have default value
  @Field()
  @TextColumn({ name: 'plot_summary' })
  plotSummary: string;

  @Field()
  @IntColumn({ name: 'release_date' })
  releaseDate: number;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.mediaBasicInfo, { nullable: true })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.mediaBasicInfo, { nullable: true })
  @JoinColumn({ name: 'series_id' })
  series: Series;

  @Field(() => Season)
  @OneToOne(() => Season, (season) => season.mediaBasicInfo, { nullable: true })
  @JoinColumn({ name: 'season_id' })
  season: Season;

  @Field(() => Episode)
  @OneToOne(() => Episode, (episode) => episode.mediaBasicInfo, { nullable: true })
  @JoinColumn({ name: 'episode_id' })
  episode: Episode;
}
