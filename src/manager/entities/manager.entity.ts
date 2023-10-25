import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from '@/base/entity.base';
import { BeforeInsert, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { AccountStatusEnum } from '../enum/manager.enum';
import { Movie } from '@/movie/entities/movie.entity';
import { Series } from '@/series/entities/series.entity';
import { EnumColumn, IntColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { ProfileInfo } from '@/profile-info/entities/profile-info.entity';
import { ManagerActivity } from '@/manager-activity/entities/manager-activity.entity';
import { passwordHash } from '@/utils/bcrypt';

@ObjectType()
@Entity({ name: 'manager' })
export class Manager extends EntityBase {
  @Field()
  @PrimaryColumn({ name: 'email', type: 'varchar' })
  email: string;

  @Field()
  @VarcharColumn({ name: 'password' })
  password: string;

  @Field()
  @EnumColumn({ name: 'account_status', enum: AccountStatusEnum })
  accountStatus: AccountStatusEnum;

  // nullable possible
  @Field()
  @IntColumn({ name: 'last_login', nullable: true })
  lastLogin: number;

  // JOINS COLUMNS //

  @Field(() => ProfileInfo)
  @OneToOne(() => ProfileInfo, (profileInfo) => profileInfo.manager)
  profileInfo: ProfileInfo;

  @Field(() => ManagerActivity)
  @OneToMany(() => ManagerActivity, (managerActivity) => managerActivity.manager)
  managerActivity: ManagerActivity[];

  @Field(() => Movie)
  @OneToMany(() => Movie, (movie) => movie.manager)
  movie: Movie[];

  @Field(() => Series)
  @OneToMany(() => Series, (series) => series.manager)
  series: Series[];

  @BeforeInsert()
  beforeInsert() {
    this.password = passwordHash(this.password);
  }
}
