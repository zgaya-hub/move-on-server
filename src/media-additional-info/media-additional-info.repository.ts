import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, SelectQueryBuilder } from 'typeorm';
import { MediaAdditionalInfo } from './entities/media-additional-info.entity';
import { Repository } from '../base/RepositoryBase';

@Injectable()
export class MediaAdditionalInfoRepository extends Repository<MediaAdditionalInfo> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(MediaAdditionalInfo, entityManager);
  }

  public async findMediaAdditionalInfoById(ID: string): Promise<MediaAdditionalInfo> {
    return await this.findOneBy({ ID });
  }

  public findMediaAdditionalInfoByMediaId(mediaId: string): SelectQueryBuilder<MediaAdditionalInfo> {
    return this.createQueryBuilder('mediaAdditionalInfo').where('mediaAdditionalInfo.movie = :mediaId OR mediaAdditionalInfo.series = :mediaId', { mediaId });
  }
}
