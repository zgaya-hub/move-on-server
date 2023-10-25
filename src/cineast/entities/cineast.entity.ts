import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from '@/base/entity.base';
import { Entity, OneToOne } from 'typeorm';
import { CountriesEnum, GenderEnum } from '@/common/enum/common.enum';
import { Cast } from '@/cast/entities/cast.entity';
import { Crew } from '@/crew/entities/crew.entity';
import { ArrayColumn, EnumColumn, IntColumn, JoinColumn, TextColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';

@ObjectType()
@Entity({ name: 'cineast' })
export class Cineast extends EntityBase {
  @Field()
  @VarcharColumn({ name: 'full_name' })
  fullName: string;

  @Field()
  @VarcharColumn({ name: 'email' })
  email: string;

  @Field()
  @VarcharColumn({ name: 'contact_no' })
  contactNo: string;

  @Field()
  @IntColumn({ name: 'dob' })
  DOB: number;

  @Field()
  @TextColumn({ name: 'bio' })
  bio: string;

  @Field()
  @EnumColumn({ name: 'gender', enum: GenderEnum })
  gender: GenderEnum;

  @Field()
  @EnumColumn({ name: 'country', enum: CountriesEnum })
  country: CountriesEnum;

  @Field(() => [String])
  @ArrayColumn({ name: 'award' })
  award: Array<string>;

  @Field(() => Cast)
  @OneToOne(() => Cast, (cast) => cast.cineast, { nullable: true })
  @JoinColumn({ name: 'cast_id' })
  cast: Cast;

  @Field(() => Crew)
  @OneToOne(() => Crew, (crew) => crew.cineast, { nullable: true })
  @JoinColumn({ name: 'crew_id' })
  crew: Crew;
}
