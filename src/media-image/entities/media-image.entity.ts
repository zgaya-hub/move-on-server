import { ObjectType, Field } from '@nestjs/graphql';
import { EnumColumn, JoinColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { Movie } from '@/movie/entities/movie.entity';
import { Entity, ManyToOne } from 'typeorm';
import { Series } from '@/series/entities/series.entity';
import { Season } from '@/season/entities/season.entity';
import { Episode } from '@/episode/entities/episode.entity';
import { EntityBase } from '@/base/EntityBase';
import { Trailer } from '@/trailer/entities/trailer.entity';
import { MediaImageTypeEnum } from '@/common/enum/common.enum';

@ObjectType()
@Entity()
export class MediaImage extends EntityBase {
  @Field()
  @EnumColumn({ enum: MediaImageTypeEnum })
  mediaImageType: MediaImageTypeEnum;

  @Field()
  @VarcharColumn()
  mediaImageUrl: string;

  // is nullable possible
  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.mediaImage, { nullable: true })
  @JoinColumn()
  movie: Movie;

  // is nullable possible
  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.mediaImage, { nullable: true })
  @JoinColumn()
  series: Series;

  // is nullable possible
  @Field(() => Season)
  @ManyToOne(() => Season, (season) => season.mediaImage, { nullable: true })
  @JoinColumn()
  season: Season;

  // is nullable possible
  @Field(() => Episode)
  @ManyToOne(() => Episode, (episode) => episode.mediaImage, { nullable: true })
  @JoinColumn()
  episode: Episode;

  // is nullable possible
  @Field(() => Trailer)
  @ManyToOne(() => Trailer, (trailer) => trailer.mediaImage, { nullable: true })
  @JoinColumn()
  trailer: Trailer;
}
