/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsObject, IsOptional, IsUUID } from 'class-validator';
import { MediaBasicInfoInputDto } from 'src/media-basic-info/dto/media-basic-info.input.dto';
import { MediaAdditionalInfoInputDto } from 'src/media-additional-info/dto/media-additional-info.input.dto';
import { MediaImageTypeEnum } from 'src/common/enum/common.enum';

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
  export class UpdateSeriesInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    MediaImageId: string;

    @Field(() => PartialType<MediaBasicInfoInputDto.CreateMediaBasicInfoInput>)
    @IsObject()
    @IsOptional()
    MediaBasicInfo: Partial<MediaBasicInfoInputDto.CreateMediaBasicInfoInput>;

    @Field(() => PartialType<MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput>)
    @IsObject()
    @IsOptional()
    MediaAdditionalInfo: Partial<MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput>;
  }

  @InputType()
  export class GetManagerSeriesWithImageAndBasicInfoInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(MediaImageTypeEnum)
    MediaImageType: MediaImageTypeEnum;
  }
}
