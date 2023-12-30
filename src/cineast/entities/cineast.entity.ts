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
  cineastFullName: string;

  @Field()
  @VarcharColumn()
  cineastEmail: string;

  @Field()
  @VarcharColumn()
  cineastContactNo: string;

  @Field()
  @IntColumn()
  cineastDOB: number;

  @Field()
  @TextColumn()
  cineastBio: string;

  @Field()
  @EnumColumn({ enum: GenderEnum })
  cineastGender: GenderEnum;

  @Field()
  @EnumColumn({ enum: MediaCountriesEnum })
  cineastCountry: MediaCountriesEnum;

  @Field(() => [String])
  @ArrayColumn()
  cineastAward: Array<string>;

  @Field(() => Cast)
  @OneToOne(() => Cast, (cast) => cast.cineast, { nullable: true })
  @JoinColumn()
  cast: Cast;

  @Field(() => Crew)
  @OneToOne(() => Crew, (crew) => crew.cineast, { nullable: true })
  @JoinColumn()
  crew: Crew;
}
