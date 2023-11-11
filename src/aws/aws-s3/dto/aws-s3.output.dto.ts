/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType } from '@nestjs/graphql';

export namespace AwsS3OutputDto {
  @InputType()
  export class GetS3SignedUrlOutput {
    @Field(() => String)
    signedUrl: string;

    @Field(() => String)
    signedUrlKeyId: string;
  }

  @InputType()
  export class IdOutput {
    @Field(() => String)
    ID: string;
  }
}
