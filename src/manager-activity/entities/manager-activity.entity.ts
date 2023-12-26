import { ObjectType, Field } from '@nestjs/graphql';
import { EnumColumn, JoinColumn, VarcharColumn } from 'src/decorator/entity/entity.decorator';
import { ManagerActivityActionEnum } from '../enum/manager-activity.enum';
import { ActivityStatusEnum } from 'src/common/enum/common.enum';
import { Entity, ManyToOne } from 'typeorm';
import { Manager } from 'src/manager/entities/manager.entity';
import { EntityBase } from 'src/base/EntityBase';

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
