/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsObject, IsOptional, IsUUID } from 'class-validator';
import { MediaBasicInfoInputDto } from '@/media-basic-info/dto/media-basic-info.input.dto';
import { MediaAdditionalInfoInputDto } from '@/media-additional-info/dto/media-additional-info.input.dto';

export namespace SeriesInputDto {
  @InputType()
  export class CreateSeriesInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    MediaImageId: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    SeriesId: string;

    @Field(() => MediaBasicInfoInputDto.CreateMediaBasicInfoInput)
    @IsObject()
    @IsNotEmpty()
    MediaBasicInfo: MediaBasicInfoInputDto.CreateMediaBasicInfoInput;

    @Field(() => MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput)
    @IsObject()
    @IsOptional()
    MediaAdditionalInfo: MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput;
  }
}
