import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, EntitySchema, Repository as TypeormRepository } from 'typeorm';

export class Repository<E> extends TypeormRepository<E> {
  constructor(@InjectEntityManager() EM: EntityManager) {
    super(EntitySchema<E>, EM);
  }

  async zeshanShakil() {
    return '';
  }
}
