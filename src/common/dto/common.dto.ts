/* eslint-disable @typescript-eslint/no-namespace */

import { Field, ObjectType } from '@nestjs/graphql';

export namespace CommonOutputDto {
  @ObjectType()
  export class AuthTokenOutput {
    @Field(() => String)
    token: string;
  }

  @ObjectType()
  export class SuccessOutput {
    @Field(() => Boolean)
    isSuccess: boolean;
  }
}
