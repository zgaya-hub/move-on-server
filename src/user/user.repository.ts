import { User } from '@/user/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(User, entityManager);
  }

  public async findByEmail(email: string): Promise<User> {
    return await this.findOne({ where: { email } });
  }
}
