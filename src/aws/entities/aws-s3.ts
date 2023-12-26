import { Field, ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';
import { VarcharColumn } from 'src/decorator/entity/entity.decorator';
import { EntityBase } from 'src/base/EntityBase';

@Entity()
@ObjectType()
export class AwsS3 extends EntityBase {
  @Field()
  @VarcharColumn()
  awsS3Key: string;
}
