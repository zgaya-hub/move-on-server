import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from 'src/base/EntityBase';
import { BeforeInsert, Entity, OneToMany, OneToOne } from 'typeorm';
import { ManagerAccountStatusEnum } from '../enum/manager.enum';
import { Movie } from 'src/movie/entities/movie.entity';
import { Series } from 'src/series/entities/series.entity';
import { EnumColumn, IntColumn, VarcharColumn } from 'src/decorator/entity/entity.decorator';
import { ProfileInfo } from 'src/profile-info/entities/profile-info.entity';
import { ManagerActivity } from 'src/manager-activity/entities/manager-activity.entity';
import { passwordHash } from 'src/utilities/function/bcrypt';
import { Trailer } from 'src/trailer/entities/trailer.entity';

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
  lastSignIn: number;

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
