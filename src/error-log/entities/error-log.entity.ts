import { ObjectType, Field, Int } from '@nestjs/graphql';
import { EntityBase } from '@/base/entity.base';
import { EnumColumn, IntColumn, VarcharColumn } from '@/decorator/entity/entity.decorator';
import { ErrorLogTypeEnum } from '../enum/error-log.enum';
import { Entity } from 'typeorm';

@ObjectType()
@Entity({ name: 'error_log' })
export class ErrorLog extends EntityBase {
  @Field(() => String)
  @EnumColumn({ name: 'type', enum: ErrorLogTypeEnum })
  type: ErrorLogTypeEnum;

  @Field(() => String)
  @VarcharColumn({ name: 'message' })
  message: string;

  @Field(() => Number)
  @IntColumn({ name: 'status_code' })
  statusCode: number;
}

// npx typeorm-ts-node-esm migration:generate ./src/migrations/update-post-table -d ./src/data-source.ts
// npx typeorm-ts-node-commonjs -d src/temporary-config.ts migration:generate error-log

// npx typeorm-ts-node-esm migration:generate src/error-log/migrations/error-log -d src/temporary-config.ts
