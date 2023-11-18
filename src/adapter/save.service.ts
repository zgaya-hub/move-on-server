import { Injectable } from '@nestjs/common';
import { EntityBase } from '../base/entity.base';
import { EntityManager } from 'typeorm';
import * as _ from 'lodash';

@Injectable()
export class EntitySaveService {
  private entities: EntityBase[];

  constructor(private entityManager: EntityManager) {
    this.entities = [];
  }

  push(entity: EntityBase): void {
    this.entities.push(entity);
    // this.entities = _.sortBy(this.entities, 'creationTimestamp');
  }

  getArray(): EntityBase[] {
    return this.entities;
  }

  async save(options?: SaveOptions): Promise<EntityBase[]> {
    try {
      const savedEntities = await this.entityManager.save(this.entities);
      if (options?.clear) this.clear();

      return savedEntities;
    } catch (error) {
      throw new Error(error);
    }
  }

  clear(): void {
    this.entities = [];
  }
}
