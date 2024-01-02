/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsUUID } from 'class-validator';
import { MediaBasicInfoInputDto } from 'src/media-basic-info/dto/media-basic-info.input.dto';
import { MediaAdditionalInfoInputDto } from 'src/media-additional-info/dto/media-additional-info.input.dto';
import { ImageInputDto } from 'src/image/dto/image.input.dto';

export namespace SeriesInputDto {
  @InputType()
  export class CreateSeriesInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    ImageId: string;

    @Field(() => MediaBasicInfoInputDto.CreateMediaBasicInfoInput)
    @IsObject()
    @IsNotEmpty()
    MediaBasicInfo: MediaBasicInfoInputDto.CreateMediaBasicInfoInput;

    @Field(() => MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput)
    @IsObject()
    @IsNotEmpty()
    MediaAdditionalInfo: MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput;
  }

  @InputType()
  export class GetManagerSeriesForTableInput {
    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    Page: number;

    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    PageSize: number;
  }

  @InputType()
  export class DeleteSeriesByIdParams {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    SeriesId: string;
  }

  @InputType()
  export class DeleteMultipleSeriesByIdzParams {
    @Field(() => [String])
    @IsNotEmpty()
    @IsArray()
    @IsUUID('all', { each: true })
    SeriesIdz: string[];
  }

  @InputType()
  export class UpdateSeriesInput {
    @Field(() => MediaBasicInfoInputDto.UpdateMediaBasicInfoInput)
    @IsObject()
    @IsNotEmpty()
    MediaBasicInfo: MediaBasicInfoInputDto.UpdateMediaBasicInfoInput;

    @Field(() => MediaAdditionalInfoInputDto.UpdateMediaAdditionalInfoInput)
    @IsObject()
    @IsNotEmpty()
    MediaAdditionalInfo: MediaAdditionalInfoInputDto.UpdateMediaAdditionalInfoInput;

    @Field(() => ImageInputDto.UpdateImageInput)
    @IsObject()
    @IsNotEmpty()
    Image: ImageInputDto.UpdateImageInput;
  }

  @InputType()
  export class UpdateSeriesParams {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    SeriesId: string;
  }
}
