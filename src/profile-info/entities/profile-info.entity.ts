import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Index, OneToOne } from 'typeorm';
import { Manager } from '@/manager/entities/manager.entity';
import { EntityBase } from '@/base/entity.base';
import { User } from '@/user/entities/user.entity';
import { EnumColumn, IntColumn, JoinColumn, TextColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { GenderEnum } from '@/common/enum/common.enum';

@ObjectType()
@Entity({ name: 'profile_info' })
@Index('unique_user_manager', ['user', 'manager'], { unique: true })
export class ProfileInfo extends EntityBase {
  @Field()
  @VarcharColumn({ name: 'first_name' })
  firstName: string;

  @Field()
  @VarcharColumn({ name: 'last_name' })
  lastName: string;

  @Field()
  @VarcharColumn({ name: 'contact_number' })
  contactNumber: string;

  @Field()
  @IntColumn({ name: 'dob' })
  DOB: number;

  @Field()
  @EnumColumn({ name: 'gender', enum: GenderEnum })
  gender: GenderEnum;

  // if user is not entered then we get it from (API by IP)
  @Field()
  @TextColumn({ name: 'address' })
  address: string;

  // if user not send then should create by name
  @Field()
  @VarcharColumn({ name: 'profile_pic' })
  profilePic: string;

  // JOIN COLUMNS //

  @Field(() => Manager)
  @OneToOne(() => Manager, (manager) => manager.profileInfo, { nullable: true })
  @JoinColumn({ name: 'manager_id' })
  manager: Manager;

  @Field(() => User)
  @OneToOne(() => User, (user) => user.profileInfo, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
