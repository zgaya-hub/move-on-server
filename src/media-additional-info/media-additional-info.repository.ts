import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
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
}
