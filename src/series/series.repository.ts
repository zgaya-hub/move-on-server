import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, SelectQueryBuilder } from 'typeorm';
import { Series } from './entities/series.entity';
import { Repository } from '../base/RepositoryBase';
import { MediaImageTypeEnum } from 'src/common/enum/common.enum';

@Injectable()
export class SeriesRepository extends Repository<Series> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(Series, entityManager);
  }

  findSeriesById(ID: string): Promise<Series> {
    return this.findOneBy({ ID });
  }

  findSeriesByManagerId(imageType: MediaImageTypeEnum, managerId: string): SelectQueryBuilder<Series> {
    return this.createQueryBuilder('series')
      .leftJoinAndSelect('series.mediaBasicInfo', 'mediaBasicInfo')
      .leftJoinAndSelect('series.mediaImage', 'mediaImage')
      .where('series.manager = :managerId', { managerId })
      .andWhere('mediaImage.mediaImageType = :imageType', { imageType });
  }
}
