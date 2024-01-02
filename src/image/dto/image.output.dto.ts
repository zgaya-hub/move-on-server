/* eslint-disable @typescript-eslint/no-namespace */
import { Field, ObjectType } from '@nestjs/graphql';

export namespace ImageOutputDto {
  @ObjectType()
  export class ImageIdOutput {
    @Field(() => String)
    ID: string;
  }
}
