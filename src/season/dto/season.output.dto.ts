/* eslint-disable @typescript-eslint/no-namespace */
import { Field, ObjectType } from '@nestjs/graphql';

export namespace SeasonOutputDto {
  @ObjectType()
  export class GetNextSeasonNumberOutput {
    @Field(() => Number)
    number: number;
  }
}
