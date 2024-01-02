/* eslint-disable @typescript-eslint/no-namespace */

import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsObject, IsOptional, IsUUID } from 'class-validator';
import { MediaBasicInfoInputDto } from 'src/media-basic-info/dto/media-basic-info.input.dto';
import { MediaAdditionalInfoInputDto } from 'src/media-additional-info/dto/media-additional-info.input.dto';
import { FinancialInfoInputDto } from 'src/financial-info/dto/financial-info.input.dto';

export namespace MovieInputDto {
  @InputType()
  export class CreateMovieInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    VideoId: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    SignedUrlKeyId: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    ImageId: string;

    @Field(() => MediaBasicInfoInputDto.CreateMediaBasicInfoInput)
    @IsObject()
    @IsNotEmpty()
    MediaBasicInfo: MediaBasicInfoInputDto.CreateMediaBasicInfoInput;

    @Field(() => FinancialInfoInputDto.CreateFinancialInfoInput)
    @IsObject()
    @IsOptional()
    MediaFinanacialInfo: FinancialInfoInputDto.CreateFinancialInfoInput;

    @Field(() => MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput)
    @IsObject()
    @IsOptional()
    MediaAdditionalInfo: MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput;
  }
}
