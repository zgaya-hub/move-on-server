import { ObjectType, Field } from '@nestjs/graphql';
import { ActionsEnum } from '../enum/user-activity.enum';
import { EnumColumn, JoinColumn, UuidColumn } from 'src/decorator/entity/entity.decorator';
import { Entity, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { ActivityStatusEnum } from 'src/common/enum/common.enum';
import { EntityBase } from 'src/base/EntityBase';

@ObjectType()
@Entity()
export class UserActivity extends EntityBase {
  @Field()
  @EnumColumn({ enum: ActionsEnum })
  action: ActionsEnum;

  @Field()
  @EnumColumn({ enum: ActivityStatusEnum })
  status: ActivityStatusEnum;

  @Field()
  @UuidColumn()
  contentId: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.userActivity)
  @JoinColumn()
  user: User;
}
