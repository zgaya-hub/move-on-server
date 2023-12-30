import { ObjectType, Field } from '@nestjs/graphql';
import { EntityBase } from 'src/base/EntityBase';
import { EnumColumn, IntColumn, VarcharColumn } from 'src/decorator/entity/entity.decorator';
import { ErrorLogTypeEnum } from '../enum/error-log.enum';
import { Entity } from 'typeorm';

@ObjectType()
@Entity()
export class ErrorLog extends EntityBase {
  @Field(() => String)
  @EnumColumn({ enum: ErrorLogTypeEnum })
  type: ErrorLogTypeEnum;

  @Field(() => String)
  @VarcharColumn()
  message: string;

  @Field(() => Number)
  @IntColumn()
  statusCode: number;
}
