import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
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
}
