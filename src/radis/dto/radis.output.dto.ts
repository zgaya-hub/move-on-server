/* eslint-disable @typescript-eslint/no-namespace */
import { Field, ObjectType } from '@nestjs/graphql';

export namespace RadisOutputDto {
  @ObjectType()
  export class IdOutput {
    @Field(() => String)
    ID: string;
  }

  @ObjectType()
  export class ValueOutput<T> {
    value: T;
  }
}
