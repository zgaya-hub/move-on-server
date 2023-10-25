/* eslint-disable @typescript-eslint/no-namespace */
import { Field, ObjectType } from '@nestjs/graphql';

export namespace VideoOutputDto {
  @ObjectType()
  export class GetS3UploadVdeoUrlOutput {
    @Field(() => String)
    url: string;
  }
}
