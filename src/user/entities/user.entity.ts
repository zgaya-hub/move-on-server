import { ObjectType, Field } from '@nestjs/graphql';
import { BeforeInsert, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { EntityBase } from '@/base/entity.base';
import { UserActivity } from '@/user-activity/entities/user-activity.entity';
import { VarcharColumn } from '@/decorator/entity/entity.decorator';
import { ProfileInfo } from '@/profile-info/entities/profile-info.entity';
import { Review } from '@/review/entities/review.entity';
import { passwordHash } from '@/utils/bcrypt';

@ObjectType()
@Entity()
export class User extends EntityBase {
  @Field()
  @VarcharColumn()
  email: string;

  @Field()
  @VarcharColumn()
  password: string;

  @Field(() => ProfileInfo)
  @OneToOne(() => ProfileInfo, (profileInfo) => profileInfo.user)
  profileInfo: ProfileInfo;

  @Field(() => UserActivity)
  @OneToMany(() => UserActivity, (userActivity) => userActivity.user)
  userActivity: UserActivity[];

  @Field(() => Review)
  @OneToMany(() => Review, (review) => review.user)
  review: Review[];

  @BeforeInsert()
  beforeInsert() {
    this.password = passwordHash(this.password);
  }
}
