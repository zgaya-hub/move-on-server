import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, SelectQueryBuilder } from 'typeorm';
import { Episode } from './entities/episode.entity';
import { Repository } from '../base/RepositoryBase';

@Injectable()
export class EpisodeRepository extends Repository<Episode> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(Episode, entityManager);
  }

  public async findEpisodeById(ID: string): Promise<Episode> {
    return await this.findOneBy({ ID });
  }

  public getLastEpisodeNumberBySeasonId(seasonId: string): SelectQueryBuilder<Episode> {
    return this.createQueryBuilder('episode').where('episode.season = :seasonId', { seasonId }).select(['episodeNo']);
  }
}
