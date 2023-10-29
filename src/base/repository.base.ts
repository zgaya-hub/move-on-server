// import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, EntityTarget, QueryRunner, Repository as TypeormRepository } from 'typeorm';

export class Repository<E> extends TypeormRepository<E> {
  constructor(target: EntityTarget<E>, EM: EntityManager, queryRunner?: QueryRunner) {
    super(target, EM, queryRunner);
  }

  async updateR(entity: EntityTarget<E>) {
    return '';
  }
}
