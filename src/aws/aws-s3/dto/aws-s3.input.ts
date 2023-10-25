/* eslint-disable @typescript-eslint/no-namespace */
import { InputType } from '@nestjs/graphql';

export namespace AwsS3Dto {
  @InputType()
  export class GetS3SignedUrlInput {}
}
