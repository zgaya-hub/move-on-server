import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, SelectQueryBuilder } from 'typeorm';
import { Repository } from '../base/RepositoryBase';
import { SeriesCrew } from './entities/series-crew.entity';

@Injectable()
export class SeriesCrewRepository extends Repository<SeriesCrew> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(SeriesCrew, entityManager);
  }

  public findSeriesCrewBySeriesId(seriesId: string): SelectQueryBuilder<SeriesCrew> {
    return this.createQueryBuilder('seriesCrew').where('seriesCrew.series = :seriesId', { seriesId });
  }
}
