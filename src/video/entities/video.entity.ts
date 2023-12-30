import { ObjectType, Field } from '@nestjs/graphql';
import { EnumColumn, IntColumn, JoinColumn, TinyintColumn, VarcharColumn } from 'src/decorator/entity/entity.decorator';
import { Entity, OneToOne } from 'typeorm';
import { EntityBase } from 'src/base/EntityBase';
import { VideoQualityEnum } from '../enum/video.enum';
import { Episode } from 'src/episode/entities/episode.entity';
import { Trailer } from 'src/trailer/entities/trailer.entity';
import { Movie } from 'src/movie/entities/movie.entity';

@ObjectType()
@Entity()
export class Video extends EntityBase {
  @Field()
  @VarcharColumn()
  managerId: string;

  @Field()
  @EnumColumn({ enum: VideoQualityEnum })
  quality: VideoQualityEnum;

  @Field()
  @IntColumn()
  width: number;

  @Field()
  @IntColumn()
  height: number;

  // in mbs
  @Field()
  @IntColumn()
  sizeInKb: number;

  // in mbs
  @Field()
  @VarcharColumn()
  mime: string;

  // in milliseconds
  @Field()
  @IntColumn()
  runTime: number;

  // in milliseconds
  @Field()
  @TinyintColumn({ default: false })
  isUsed: boolean;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.video, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  movie: Movie;

  @Field(() => Episode)
  @OneToOne(() => Episode, (episode) => episode.video, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  episode: Episode;

  @Field(() => Trailer)
  @OneToOne(() => Trailer, (trailer) => trailer.video, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  trailer: Trailer;
}
