import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Series } from './entities/series.entity';
import { Repository } from '../base/repository.base';

@Injectable()
export class SeriesRepository extends Repository<Series> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(Series, entityManager);
  }

  public async findSeriesById(ID: string): Promise<Series> {
    return await this.findOneBy({ ID });
  }
}
