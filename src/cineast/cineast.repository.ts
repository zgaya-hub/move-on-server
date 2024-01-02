import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Repository } from '../base/RepositoryBase';
import { Cineast } from './entities/cineast.entity';

@Injectable()
export class CineastRepository extends Repository<Cineast> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(Cineast, entityManager);
  }

  findCineastById(ID: string): Promise<Cineast> {
    return this.findOneBy({ ID });
  }
}
