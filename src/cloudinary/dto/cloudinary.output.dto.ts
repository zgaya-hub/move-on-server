/* eslint-disable @typescript-eslint/no-namespace */
import { Field, ObjectType } from '@nestjs/graphql';

export namespace CloudinaryOutputDto {
  @ObjectType()
  export class ImageUrlOutput {
    @Field(() => String)
    imageUrl: string;
  }
}
