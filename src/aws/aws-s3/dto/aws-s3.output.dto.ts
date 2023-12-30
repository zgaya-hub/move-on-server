/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType } from '@nestjs/graphql';

export namespace AwsS3OutputDto {
  @InputType()
  export class GetS3SignedUrlOutput {
    @Field(() => String)
    url: string;

    @Field(() => String)
    keyId: string;
  }

  @InputType()
  export class IdOutput {
    @Field(() => String)
    ID: string;
  }
}
