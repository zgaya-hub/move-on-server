/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsUUID } from 'class-validator';
import { MediaBasicInfoInputDto } from 'src/media-basic-info/dto/media-basic-info.input.dto';
import { MediaAdditionalInfoInputDto } from 'src/media-additional-info/dto/media-additional-info.input.dto';

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

    @Field(() => MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput)
    @IsObject()
    @IsNotEmpty()
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
}
