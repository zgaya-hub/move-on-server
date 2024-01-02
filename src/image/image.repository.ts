import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, SelectQueryBuilder } from 'typeorm';
import { Image } from './entities/image.entity';
import { Repository } from '../base/RepositoryBase';

@Injectable()
export class ImageRepository extends Repository<Image> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(Image, entityManager);
  }

  public async findImageById(ID: string): Promise<Image> {
    return await this.findOneBy({ ID });
  }

  public findImageByIdWithMedia(ID: string): SelectQueryBuilder<Image> {
    return this.createQueryBuilder('image')
      .leftJoinAndSelect('image.series', 'series')
      .leftJoinAndSelect('image.movie', 'movie')
      .leftJoinAndSelect('image.season', 'season')
      .leftJoinAndSelect('image.episode', 'episode')
      .leftJoinAndSelect('image.trailer', 'trailer')
      .where('image.ID = :ID', { ID });
  }

  public findImageByMediaId(mediaId: string): SelectQueryBuilder<Image> {
    return this.createQueryBuilder('mediaBasicInfo').where(
      'mediaBasicInfo.movie = :mediaId OR mediaBasicInfo.series = :mediaId OR mediaBasicInfo.season = :mediaId OR mediaBasicInfo.trailer = :mediaId OR mediaBasicInfo.episode = :mediaId',
      { mediaId },
    );
  }
}
