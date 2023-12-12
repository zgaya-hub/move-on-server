import { Field, ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';
import { VarcharColumn } from '@/decorator/entity/entity.decorator';
import { EntityBase } from '@/base/EntityBase';

@Entity()
@ObjectType()
export class AwsS3 extends EntityBase {
  @Field()
  @VarcharColumn()
  awsS3Key: string;
}
