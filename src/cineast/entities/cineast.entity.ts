import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from 'src/base/EntityBase';
import { Entity, OneToOne } from 'typeorm';
import { MediaCountriesEnum, GenderEnum } from 'src/common/enum/common.enum';
import { Cast } from 'src/cast/entities/cast.entity';
import { Crew } from 'src/crew/entities/crew.entity';
import { ArrayColumn, EnumColumn, IntColumn, JoinColumn, TextColumn, VarcharColumn } from 'src/decorator/entity/entity.decorator';

@ObjectType()
@Entity()
export class Cineast extends EntityBase {
  @Field()
  @VarcharColumn()
  fullName: string;

  @Field()
  @VarcharColumn()
  email: string;

  @Field()
  @VarcharColumn()
  contactNo: string;

  @Field()
  @IntColumn()
  DOB: number;

  @Field()
  @TextColumn()
  bio: string;

  @Field()
  @EnumColumn({ enum: GenderEnum })
  gender: GenderEnum;

  @Field()
  @EnumColumn({ enum: MediaCountriesEnum })
  country: MediaCountriesEnum;

  @Field(() => [String])
  @ArrayColumn()
  award: Array<string>;

  @Field(() => Cast)
  @OneToOne(() => Cast, (cast) => cast.cineast, { nullable: true })
  @JoinColumn()
  cast: Cast;

  @Field(() => Crew)
  @OneToOne(() => Crew, (crew) => crew.cineast, { nullable: true })
  @JoinColumn()
  crew: Crew;
}
