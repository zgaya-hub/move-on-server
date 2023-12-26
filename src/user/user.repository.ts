import { User } from 'src/user/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Repository } from '../base/RepositoryBase';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(User, entityManager);
  }

  public async findByEmail(email: string): Promise<User> {
    return await this.findOne({ where: { email } });
  }

  public async isUserExist(email: string): Promise<boolean> {
    return await this.exist({ where: { email } });
  }
}
