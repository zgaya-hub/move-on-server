import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, SelectQueryBuilder } from 'typeorm';
import { MediaImage } from './entities/media-image.entity';
import { Repository } from '../base/RepositoryBase';

@Injectable()
export class MediaImageRepository extends Repository<MediaImage> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(MediaImage, entityManager);
  }

  public async findMediaImageById(ID: string): Promise<MediaImage> {
    return await this.findOneBy({ ID });
  }

  public findMediaImageByIdWithMedia(ID: string): SelectQueryBuilder<MediaImage> {
    return this.createQueryBuilder('mediaImage')
      .leftJoinAndSelect('mediaImage.series', 'series')
      .leftJoinAndSelect('mediaImage.movie', 'movie')
      .leftJoinAndSelect('mediaImage.season', 'season')
      .leftJoinAndSelect('mediaImage.episode', 'episode')
      .leftJoinAndSelect('mediaImage.trailer', 'trailer')
      .where('mediaImage.ID = :ID', { ID });
  }

  public findMediaImageByMediaId(mediaId: string): SelectQueryBuilder<MediaImage> {
    return this.createQueryBuilder('mediaBasicInfo').where(
      'mediaBasicInfo.movie = :mediaId OR mediaBasicInfo.series = :mediaId OR mediaBasicInfo.season = :mediaId OR mediaBasicInfo.trailer = :mediaId OR mediaBasicInfo.episode = :mediaId',
      { mediaId },
    );
  }
}
