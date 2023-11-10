import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from '@/base/entity.base';
import { BeforeInsert, Entity, OneToMany, OneToOne } from 'typeorm';
import { ManagerAccountStatusEnum } from '../enum/manager.enum';
import { Movie } from '@/movie/entities/movie.entity';
import { Series } from '@/series/entities/series.entity';
import { EnumColumn, IntColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { ProfileInfo } from '@/profile-info/entities/profile-info.entity';
import { ManagerActivity } from '@/manager-activity/entities/manager-activity.entity';
import { passwordHash } from '@/utils/bcrypt';
import { Trailer } from '@/trailer/entities/trailer.entity';

@ObjectType()
@Entity()
export class Manager extends EntityBase {
  @Field()
  @VarcharColumn({ unique: true })
  email: string;

  @Field()
  @VarcharColumn()
  password: string;

  @Field()
  @EnumColumn({ enum: ManagerAccountStatusEnum })
  accountStatus: ManagerAccountStatusEnum;

  // nullable possible
  @Field()
  @IntColumn({ nullable: true })
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

  @Field(() => [Trailer])
  @OneToMany(() => Trailer, (trailer) => trailer.manager)
  trailer: Trailer[];

  @BeforeInsert()
  beforeInsert() {
    this.password = passwordHash(this.password);
  }
}
