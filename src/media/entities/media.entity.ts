import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne } from 'typeorm';
import { Movie } from '@/movie/entities/movie.entity';
import { Series } from '@/series/entities/series.entity';
import { EntityBase } from '@/base/entity.base';
import { Episode } from '@/episode/entities/episode.entity';
import { MediaTypeEnum } from '../enum/media.enum';
import { Season } from '@/season/entities/season.entity';
import { EnumColumn, JoinColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';

@ObjectType()
@Entity()
export class Media extends EntityBase {
  @Field()
  @EnumColumn({ enum: MediaTypeEnum })
  MediaType: MediaTypeEnum;

  @Field()
  @VarcharColumn()
  MediaS3ObjectKey: string;

  // is nullable possible
  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.media, { nullable: true })
  @JoinColumn()
  movie: Movie;

  // is nullable possible
  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.media, { nullable: true })
  @JoinColumn()
  series: Series;

  // is nullable possible
  @Field(() => Season)
  @ManyToOne(() => Season, (season) => season.media, { nullable: true })
  @JoinColumn()
  season: Season;

  // is nullable possible
  @Field(() => Episode)
  @ManyToOne(() => Episode, (episode) => episode.media, { nullable: true })
  @JoinColumn()
  episode: Episode;
}
