import { ObjectType, Field } from '@nestjs/graphql';
import { EnumColumn, JoinColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { ManagerActivityActionEnum } from '../enum/manager-activity.enum';
import { ActivityStatusEnum } from '@/common/enum/common.enum';
import { Entity, ManyToOne } from 'typeorm';
import { Manager } from '@/manager/entities/manager.entity';
import { EntityBase } from '@/base/entity.base';

@ObjectType()
@Entity()
export class ManagerActivity extends EntityBase {
  @Field()
  @EnumColumn({ enum: ManagerActivityActionEnum })
  managerActivityAction: ManagerActivityActionEnum;

  @Field()
  @EnumColumn({ enum: ActivityStatusEnum })
  managerActivityStatus: ActivityStatusEnum;

  @Field()
  @VarcharColumn()
  managerActivitContentId: string;

  @Field(() => Manager)
  @ManyToOne(() => Manager, (manager) => manager.managerActivity)
  @JoinColumn()
  manager: Manager;
}
