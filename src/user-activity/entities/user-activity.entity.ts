import { ObjectType, Field } from '@nestjs/graphql';
import { ActionsEnum } from '../enum/user-activity.enum';
import { EnumColumn, JoinColumn } from '@/decorator/entity/entity.decorator';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from '@/user/entities/user.entity';
import { ActivityStatusesEnum } from '@/common/enum/common.enum';
import { EntityBase } from '@/base/entity.base';

@ObjectType()
@Entity({ name: 'user_activity' })
export class UserActivity extends EntityBase {
  @Field()
  @EnumColumn({ name: 'action', enum: ActionsEnum })
  action: ActionsEnum;

  @Field()
  @EnumColumn({ name: 'status', enum: ActivityStatusesEnum })
  status: ActivityStatusesEnum;

  @Field()
  @Column({ name: 'content_id', type: 'uuid' })
  contentId: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.userActivity)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
