import { Field, ID } from '@nestjs/graphql';
import { BaseEntity, BeforeInsert, BeforeSoftRemove, BeforeUpdate, PrimaryGeneratedColumn } from 'typeorm';
import { BigIntColumn } from '../decorator/entity/entity.decorator';
import { cloneDeep } from 'lodash';

export class EntityBase extends BaseEntity {
  public entitySnapshot: this;

  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid', { name: 'ID' })
  ID: number;

  @Field(() => Number)
  @BigIntColumn({ name: 'created_at' })
  createdAt: number;

  @Field(() => Number)
  @BigIntColumn({ name: 'updated_at', nullable: true })
  updatedAt: number;

  @Field(() => Number)
  @BigIntColumn({ name: 'deleted_at', nullable: true })
  deletedAt: number;

  loadSnapshotForPartialUpdate() {
    this.entitySnapshot = cloneDeep(this);
  }

  @BeforeInsert()
  async beforeEntityInsert() {
    this.createdAt = Date.now();
  }

  @BeforeUpdate()
  async beforeEntityUpdate() {
    this.updatedAt = Date.now();
  }

  @BeforeSoftRemove()
  async beforeEntityDelete() {
    this.deletedAt = Date.now();
  }
}
