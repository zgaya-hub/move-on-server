import { ObjectType, Field } from '@nestjs/graphql';
import { JoinColumn, TextColumn } from 'src/decorator/entity/entity.decorator';
import { Movie } from 'src/movie/entities/movie.entity';
import { Entity, OneToOne } from 'typeorm';
import { Episode } from 'src/episode/entities/episode.entity';
import { Trailer } from 'src/trailer/entities/trailer.entity';
import { EntityBase } from 'src/base/EntityBase';

@ObjectType()
@Entity()
export class MediaResource extends EntityBase {
  @Field()
  @TextColumn()
  s3ObjectKey: string;

  @Field()
  @TextColumn()
  s3ObjectUrl: string;

  // is nullable possible
  @Field(() => Movie)
  @OneToOne(() => Movie, (movie) => movie.mediaResource, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  movie: Movie;

  // is nullable possible
  @Field(() => Episode)
  @OneToOne(() => Episode, (episode) => episode.mediaResource, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  episode: Episode;

  // is nullable possible
  @Field(() => Trailer)
  @OneToOne(() => Trailer, (trailer) => trailer.mediaResource, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  trailer: Trailer;
}
