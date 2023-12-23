/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsObject, IsOptional, IsUUID } from 'class-validator';
import { MediaBasicInfoInputDto } from '@/media-basic-info/dto/media-basic-info.input.dto';
import { MediaAdditionalInfoInputDto } from '@/media-additional-info/dto/media-additional-info.input.dto';
import { MediaImageTypeEnum } from '@/common/enum/common.enum';

export namespace SeriesInputDto {
  @InputType()
  export class CreateSeriesInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    MediaImageId: string;

    @Field(() => MediaBasicInfoInputDto.CreateMediaBasicInfoInput)
    @IsObject()
    @IsNotEmpty()
    MediaBasicInfo: MediaBasicInfoInputDto.CreateMediaBasicInfoInput;

    @Field(() => MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput, { nullable: true })
    @IsObject()
    @IsOptional()
    MediaAdditionalInfo: MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput;
  }

  @InputType()
  export class GetManagerSeriesWithImageAndBasicInfoInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(MediaImageTypeEnum)
    MediaImageType: MediaImageTypeEnum;
  }
}
