/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsObject, IsUUID } from 'class-validator';
import { MediaBasicInfoInputDto } from '@/media-basic-info/dto/media-basic-info.input.dto';

export namespace SeasonInputDto {
  @InputType()
  export class CreateSeasonInput {
    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    SeasonNo: number;

    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    SeriesId: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    MediaImageId: string;

    @Field(() => MediaBasicInfoInputDto.CreateMediaBasicInfoInput)
    @IsObject()
    @IsNotEmpty()
    MediaBasicInfo: MediaBasicInfoInputDto.CreateMediaBasicInfoInput;
  }
}
