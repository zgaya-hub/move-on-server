/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType } from '@nestjs/graphql';

export namespace CloudinaryInputDto {
  @InputType()
  export class CloudinaryUploadInput {
    @Field(() => String)
    base64: string;
  }
}
