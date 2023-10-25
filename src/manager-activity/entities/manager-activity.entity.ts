import { ObjectType, Field, Int } from '@nestjs/graphql';
import { EnumColumn, JoinColumn } from '@/decorator/entity/entity.decorator';
import { ActionsEnum } from '../enum/manager-activity.enum';
import { ActivityStatusesEnum } from '@/common/enum/common.enum';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Manager } from '@/manager/entities/manager.entity';
import { EntityBase } from '@/base/entity.base';

@ObjectType()
@Entity({ name: 'manager_activity' })
export class ManagerActivity extends EntityBase {
  @Field()
  @EnumColumn({ name: 'action', enum: ActionsEnum })
  action: ActionsEnum;

  @Field()
  @EnumColumn({ name: 'status', enum: ActivityStatusesEnum })
  status: ActivityStatusesEnum;

  @Field()
  @Column({ name: 'content_id', type: 'uuid' })
  contentId: string;

  @Field(() => Manager)
  @ManyToOne(() => Manager, (manager) => manager.managerActivity)
  @JoinColumn({ name: 'manager_id' })
  manager: Manager;
}
