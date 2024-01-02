import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from 'src/base/EntityBase';
import { Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Episode } from 'src/episode/entities/episode.entity';
import { Series } from 'src/series/entities/series.entity';
import { IntColumn, JoinColumn } from 'src/decorator/entity/entity.decorator';
import { Image } from 'src/image/entities/image.entity';
import { MediaBasicInfo } from 'src/media-basic-info/entities/media-basic-info.entity';
import { Trailer } from 'src/trailer/entities/trailer.entity';

@ObjectType()
@Entity()
export class Season extends EntityBase {
  @Field()
  @IntColumn()
  number: number;

  @Field(() => Series)
  @ManyToOne(() => Series, (series) => series.season, { onDelete: 'CASCADE' })
  @JoinColumn()
  series: Series;

  @Field(() => MediaBasicInfo)
  @OneToOne(() => MediaBasicInfo, (mediaBasicInfo) => mediaBasicInfo.season)
  mediaBasicInfo: MediaBasicInfo;

  @Field(() => Trailer)
  @OneToOne(() => Trailer, (trailer) => trailer.season)
  trailer: Trailer;

  @Field(() => Image)
  @OneToOne(() => Image, (image) => image.season)
  image: Image;

  @Field(() => [Episode])
  @OneToMany(() => Episode, (episode) => episode.season)
  episode: Episode[];
}
