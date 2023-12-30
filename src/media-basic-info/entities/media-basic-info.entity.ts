import { ObjectType, Field } from '@nestjs/graphql';
import { TimestampColumn, JoinColumn, TextColumn, VarcharColumn, BigIntColumn } from 'src/decorator/entity/entity.decorator';
import { Entity, OneToOne } from 'typeorm';
import { Movie } from 'src/movie/entities/movie.entity';
import { Series } from 'src/series/entities/series.entity';
import { EntityBase } from 'src/base/EntityBase';
import { Season } from 'src/season/entities/season.entity';
import { Episode } from 'src/episode/entities/episode.entity';
import { Trailer } from 'src/trailer/entities/trailer.entity';

@ObjectType()
@Entity()
export class MediaBasicInfo extends EntityBase {
  @Field()
  @VarcharColumn()
  title: string;

  // have default value
  @Field()
  @TextColumn()
  plotSummary: string;

  @Field()
  @BigIntColumn()
  releaseDate: number;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.mediaBasicInfo, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  movie: Movie;

  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.mediaBasicInfo, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  series: Series;

  @Field(() => Season)
  @OneToOne(() => Season, (season) => season.mediaBasicInfo, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  season: Season;

  @Field(() => Episode)
  @OneToOne(() => Episode, (episode) => episode.mediaBasicInfo, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  episode: Episode;

  @Field(() => Trailer)
  @OneToOne(() => Trailer, (trailer) => trailer.mediaBasicInfo, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  trailer: Trailer;
}
