/* eslint-disable @typescript-eslint/no-namespace */
import { Field, ObjectType } from '@nestjs/graphql';

export namespace EpisodeOutputDto {
  @ObjectType()
  export class GetNextEpisodeNumberOutput {
    @Field(() => Number)
    number: number;
  }
}
