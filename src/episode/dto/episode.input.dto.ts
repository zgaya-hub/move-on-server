/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsObject, IsUUID } from 'class-validator';
import { MediaBasicInfoInputDto } from '@/media-basic-info/dto/media-basic-info.input.dto';

export namespace EpisodeInputDto {
  @InputType()
  export class CreateEpisodeInput {
    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    EpisodeNo: number;

    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    SeasonId: string;

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
    MediaImageId: string;

    @Field(() => MediaBasicInfoInputDto.CreateMediaBasicInfoInput)
    @IsObject()
    @IsNotEmpty()
    MediaBasicInfo: MediaBasicInfoInputDto.CreateMediaBasicInfoInput;
  }
  @InputType()
  export class ChangeEpisodeSeasonInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    SeasonId: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    EpisodeId: string;
  }
}
