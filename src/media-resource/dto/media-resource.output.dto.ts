/* eslint-disable @typescript-eslint/no-namespace */
import { Field, ObjectType } from '@nestjs/graphql';

export namespace MediaResourceOutputDto {
  @ObjectType()
  export class RetrieveS3ObjectKeyAndUrlOutput {
    @Field(() => String)
    ObjectUrl: string;

    @Field(() => String)
    ObjectKey: string;
  }
}
