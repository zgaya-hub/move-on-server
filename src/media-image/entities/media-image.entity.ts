import { ObjectType, Field } from '@nestjs/graphql';
import { EnumColumn, JoinColumn, VarcharColumn } from 'src/decorator/entity/entity.decorator';
import { Movie } from 'src/movie/entities/movie.entity';
import { Entity, OneToOne } from 'typeorm';
import { Series } from 'src/series/entities/series.entity';
import { Season } from 'src/season/entities/season.entity';
import { Episode } from 'src/episode/entities/episode.entity';
import { EntityBase } from 'src/base/EntityBase';
import { Trailer } from 'src/trailer/entities/trailer.entity';
import { MediaImageVariantEnum } from 'src/common/enum/common.enum';

@ObjectType()
@Entity()
export class MediaImage extends EntityBase {
  @Field()
  @EnumColumn({ enum: MediaImageVariantEnum, default: MediaImageVariantEnum.THUMBNAIL })
  variant: MediaImageVariantEnum;

  @Field()
  @VarcharColumn()
  url: string;

  // is nullable possible
  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.mediaImage, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  movie: Movie;

  // is nullable possible
  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.mediaImage, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  series: Series;

  // is nullable possible
  @Field(() => Season)
  @OneToOne(() => Season, (season) => season.mediaImage, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  season: Season;

  // is nullable possible
  @Field(() => Episode)
  @OneToOne(() => Episode, (episode) => episode.mediaImage, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  episode: Episode;

  // is nullable possible
  @Field(() => Trailer)
  @OneToOne(() => Trailer, (trailer) => trailer.mediaImage, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  trailer: Trailer;
}
