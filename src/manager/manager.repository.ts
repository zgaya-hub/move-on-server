import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Manager } from './entities/manager.entity';
import { InjectEntityManager } from '@nestjs/typeorm';
// import { Repository } from '../base/repository.base';

@Injectable()
export class ManagerRepository extends Repository<Manager> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(Manager, entityManager);
  }

  public async findByEmail(email: string): Promise<Manager> {
    return await this.findOne({ where: { email } });
  }

  public async isManagerExist(email: string): Promise<boolean> {
    return await this.exist({ where: { email } });
  }
}
