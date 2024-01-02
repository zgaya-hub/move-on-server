import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, SelectQueryBuilder } from 'typeorm';
import { Series } from './entities/series.entity';
import { Repository } from '../base/RepositoryBase';

@Injectable()
export class SeriesRepository extends Repository<Series> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(Series, entityManager);
  }

  findSeriesById(ID: string): Promise<Series> {
    return this.findOneBy({ ID });
  }

  findManagerSeriesWithOneToOneJoins(managerId: string): SelectQueryBuilder<Series> {
    return this.createQueryBuilder('series')
      .leftJoinAndSelect('series.mediaBasicInfo', 'mediaBasicInfo')
      .leftJoinAndSelect('series.image', 'image')
      .leftJoinAndSelect('series.mediaAdditionalInfo', 'mediaAdditionalInfo')
      .leftJoinAndSelect('series.achievementInfo', 'achievementInfo')
      .leftJoinAndSelect('series.financialInfo', 'financialInfo')
      .where('series.manager = :managerId', { managerId });
  }

  findSeriesByIdWithOneToOneJoins(seriesId: string): SelectQueryBuilder<Series> {
    return this.createQueryBuilder('series')
      .leftJoinAndSelect('series.mediaBasicInfo', 'mediaBasicInfo')
      .leftJoinAndSelect('series.image', 'image')
      .leftJoinAndSelect('series.mediaAdditionalInfo', 'mediaAdditionalInfo')
      .leftJoinAndSelect('series.achievementInfo', 'achievementInfo')
      .leftJoinAndSelect('series.financialInfo', 'financialInfo')
      .where('series.ID = :seriesId', { seriesId });
  }

  getManagerSeriesForTable(pageSize: number, page: number, managerId: string): SelectQueryBuilder<Series> {
    return this.createQueryBuilder('series')
      .leftJoinAndSelect('series.mediaBasicInfo', 'mediaBasicInfo')
      .leftJoinAndSelect('series.mediaAdditionalInfo', 'mediaAdditionalInfo')
      .leftJoinAndSelect('series.image', 'image')
      .where('series.manager = :managerId', { managerId })
      .take(pageSize)
      .skip(page * pageSize)
      .select([
        'series.ID',
        'mediaAdditionalInfo.originCountry',
        'mediaAdditionalInfo.originalLanguage',
        'mediaAdditionalInfo.genre',
        'mediaAdditionalInfo.status',
        'mediaBasicInfo.title',
        'mediaBasicInfo.plotSummary',
        'mediaBasicInfo.releaseDate',
        'image.url',
        'series.createdAt',
        'series.updatedAt',
      ]);
  }

  public async deleteSeriesById(ID: string): Promise<void> {
    await this.delete({ ID });
  }

  public async deleteMultipleSeriesByIdz(seriesIdz: string[]): Promise<void> {
    await this.createQueryBuilder('series').delete().where('ID IN (:...seriesIdz)', { seriesIdz }).execute();
  }
}
