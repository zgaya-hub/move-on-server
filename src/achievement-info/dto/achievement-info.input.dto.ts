/* eslint-disable @typescript-eslint/no-namespace */
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

export namespace AchievementInfoInputDto {
  @InputType()
  export class CreateAchievementInfoInput {
    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    IMDbRating: number;

    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    OMDbRating: number;

    @Field(() => [String])
    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    Award: Array<string>;
  }
}
