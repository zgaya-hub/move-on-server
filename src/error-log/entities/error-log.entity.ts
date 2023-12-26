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
  errorLogType: ErrorLogTypeEnum;

  @Field(() => String)
  @VarcharColumn()
  errorLogMessage: string;

  @Field(() => Number)
  @IntColumn()
  errorLogStatusCode: number;
}
