import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { MediaBasicInfo } from './entities/media-basic-info.entity';
import { Repository } from '../base/RepositoryBase';

@Injectable()
export class MediaBasicInfoRepository extends Repository<MediaBasicInfo> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(MediaBasicInfo, entityManager);
  }

  public async findMediaBasicInfoById(ID: string): Promise<MediaBasicInfo> {
    return await this.findOneBy({ ID });
  }
}
