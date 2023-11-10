/* eslint-disable @typescript-eslint/no-namespace */
import { InputType, ObjectType } from '@nestjs/graphql';

export namespace RadisOutputDto {
  @ObjectType()
  export class IdOutput {
    ID: string;
  }
}
