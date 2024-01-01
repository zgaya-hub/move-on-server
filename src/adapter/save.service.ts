import { Injectable } from '@nestjs/common';
import { EntityBase } from '../base/EntityBase';
import { EntityManager } from 'typeorm';
import { sortBy } from 'lodash';
import { Transactional } from 'typeorm-transactional';

@Injectable()
export class EntitySaveService {
  private entities: EntityBase[];

  constructor(private entityManager: EntityManager) {
    this.entities = [];
  }

  push(entity: EntityBase): void {
    this.entities.push(entity);
    this.entities = sortBy(this.entities, 'creationTimestamp');
  }

  getArray(): EntityBase[] {
    return this.entities;
  }

  @Transactional()
  async saveMultiple(options?: SaveOptions): Promise<EntityBase[]> {
    try {
      const savedEntities = await this.entityManager.save(this.entities.reverse());
      if (options?.clear) this.clear();

      return savedEntities;
    } catch (error) {
      throw new Error(error);
    }
  }

  @Transactional()
  async save<T extends EntityBase>(entity: T): Promise<T> {
    try {
      const savedEntity = await this.entityManager.save(entity);
      return savedEntity;
    } catch (error) {
      throw new Error(error);
    }
  }

  clear(): void {
    this.entities = [];
  }
}
