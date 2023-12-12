import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Trailer } from './entities/trailer.entity';
import { Repository } from '../base/RepositoryBase';

@Injectable()
export class TrailerRepository extends Repository<Trailer> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(Trailer, entityManager);
  }

  public async findTrailerById(ID: string): Promise<Trailer> {
    return await this.findOneBy({ ID });
  }
}
