import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Video } from './entities/video.entity';
import { Repository } from '../base/RepositoryBase';

@Injectable()
export class VideoRepository extends Repository<Video> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(Video, entityManager);
  }

  public async findVideoById(ID: string): Promise<Video> {
    return await this.findOneBy({ ID });
  }
}
