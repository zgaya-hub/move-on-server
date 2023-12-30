/* eslint-disable @typescript-eslint/no-namespace */
import { Field, ObjectType } from '@nestjs/graphql';

export namespace MediaImageOutputDto {
  @ObjectType()
  export class MediaImageIdOutput {
    @Field(() => String)
    ID: string;
  }
}
