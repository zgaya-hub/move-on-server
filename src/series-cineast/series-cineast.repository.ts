import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, SelectQueryBuilder } from 'typeorm';
import { Repository } from '../base/RepositoryBase';
import { SeriesCineast } from './entities/series-cineast.entity';

@Injectable()
export class SeriesCineastRepository extends Repository<SeriesCineast> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(SeriesCineast, entityManager);
  }

  public async findSeriesCineastById(ID: string): Promise<SeriesCineast> {
    return await this.findOneBy({ ID });
  }

  public findSeriesCineastBySeriesId(seriesId: string): SelectQueryBuilder<SeriesCineast> {
    return this.createQueryBuilder('mediaBasicInfo').where('mediaBasicInfo.series = :seriesId', { seriesId });
  }
}
