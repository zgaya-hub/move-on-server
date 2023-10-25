/* eslint-disable @typescript-eslint/no-namespace */
import { InputType } from '@nestjs/graphql';

export namespace AwsDto {
  @InputType()
  export class GetS3SignedUrlInput {}
}
