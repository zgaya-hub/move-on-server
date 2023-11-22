import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Episode } from './entities/episode.entity';
import { Repository } from '../base/repository.base';

@Injectable()
export class EpisodeRepository extends Repository<Episode> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(Episode, entityManager);
  }

  public async findEpisodeById(ID: string): Promise<Episode> {
    return await this.findOneBy({ ID });
  }
}
