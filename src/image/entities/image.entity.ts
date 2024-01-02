import { ObjectType, Field } from '@nestjs/graphql';
import { EnumColumn, JoinColumn, VarcharColumn } from 'src/decorator/entity/entity.decorator';
import { Movie } from 'src/movie/entities/movie.entity';
import { Entity, OneToOne } from 'typeorm';
import { Series } from 'src/series/entities/series.entity';
import { Season } from 'src/season/entities/season.entity';
import { Episode } from 'src/episode/entities/episode.entity';
import { EntityBase } from 'src/base/EntityBase';
import { Trailer } from 'src/trailer/entities/trailer.entity';
import { ImageVariantEnum } from 'src/common/enum/common.enum';
import { Cineast } from 'src/cineast/entities/cineast.entity';

@ObjectType()
@Entity()
export class Image extends EntityBase {
  @Field()
  @EnumColumn({ enum: ImageVariantEnum, default: ImageVariantEnum.THUMBNAIL })
  variant: ImageVariantEnum;

  @Field()
  @VarcharColumn()
  url: string;

  // is nullable possible
  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.image, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  movie: Movie;

  // is nullable possible
  @Field(() => Series)
  @OneToOne(() => Series, (series) => series.image, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  series: Series;

  // is nullable possible
  @Field(() => Cineast)
  @OneToOne(() => Cineast, (cineast) => cineast.image, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  cineast: Cineast;

  // is nullable possible
  @Field(() => Season)
  @OneToOne(() => Season, (season) => season.image, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  season: Season;

  // is nullable possible
  @Field(() => Episode)
  @OneToOne(() => Episode, (episode) => episode.image, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  episode: Episode;

  // is nullable possible
  @Field(() => Trailer)
  @OneToOne(() => Trailer, (trailer) => trailer.image, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  trailer: Trailer;
}
