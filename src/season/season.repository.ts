import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, SelectQueryBuilder } from 'typeorm';
import { Season } from './entities/season.entity';
import { Repository } from '../base/RepositoryBase';

@Injectable()
export class SeasonRepository extends Repository<Season> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(Season, entityManager);
  }

  public async findSeasonById(ID: string): Promise<Season> {
    return await this.findOneBy({ ID });
  }

  getSeasonBySeriesId(seriesId: string): SelectQueryBuilder<Season> {
    return this.createQueryBuilder('season')
      .leftJoinAndSelect('season.mediaBasicInfo', 'mediaBasicInfo')
      .leftJoinAndSelect('season.mediaImage', 'mediaImage')
      .where('season.series = :seriesId', { seriesId });
  }

  findLastSeasonBySeriesId(seriesId: string): SelectQueryBuilder<Season> {
    return this.createQueryBuilder('season').where('season.series = :seriesId', { seriesId }).orderBy('season.number', 'DESC').take(1);
  }
}
