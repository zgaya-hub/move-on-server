import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { MediaImage } from './entities/media-image.entity';
import { Repository } from '../base/repository.base';

@Injectable()
export class MediaImageRepository extends Repository<MediaImage> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(MediaImage, entityManager);
  }

  public async findMediaImageById(ID: string): Promise<MediaImage> {
    return await this.findOneBy({ ID });
  }
}
