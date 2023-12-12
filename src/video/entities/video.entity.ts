import { ObjectType, Field } from '@nestjs/graphql';
import { EnumColumn, IntColumn, JoinColumn, TinyintColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { Entity, OneToOne } from 'typeorm';
import { Movie } from '@/movie/entities/movie.entity';
import { EntityBase } from '@/base/EntityBase';
import { VideoQualityEnum } from '../enum/video.enum';
import { Episode } from '@/episode/entities/episode.entity';
import { Trailer } from '@/trailer/entities/trailer.entity';

@ObjectType()
@Entity()
export class Video extends EntityBase {
  @Field()
  @VarcharColumn()
  managerId: string;

  @Field()
  @EnumColumn({ enum: VideoQualityEnum })
  videoQuality: VideoQualityEnum;

  @Field()
  @IntColumn()
  videoWidth: number;

  @Field()
  @IntColumn()
  videoHeight: number;

  // in mbs
  @Field()
  @IntColumn()
  videoSizeInKb: number;

  // in mbs
  @Field()
  @VarcharColumn()
  videoMime: string;

  // in milliseconds
  @Field()
  @IntColumn()
  videoRunTime: number;

  // in milliseconds
  @Field()
  @TinyintColumn({ default: false })
  isUsed: boolean;

  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.video, { nullable: true })
  @JoinColumn()
  movie: Movie;

  @Field(() => Episode)
  @OneToOne(() => Episode, (episode) => episode.video, { nullable: true })
  @JoinColumn()
  episode: Episode;

  @Field(() => Trailer)
  @OneToOne(() => Trailer, (trailer) => trailer.video, { nullable: true })
  @JoinColumn()
  trailer: Trailer;
}
