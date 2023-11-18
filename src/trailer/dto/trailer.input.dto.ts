/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsObject, IsOptional, IsUUID } from 'class-validator';
import { MediaBasicInfoInputDto } from '@/media-basic-info/dto/media-basic-info.input.dto';
import { MediaAdditionalInfoInputDto } from '@/media-additional-info/dto/media-additional-info.input.dto';
import { AchievementInfoInputDto } from '@/achievement-info/dto/achievement-info.input.dto';

export namespace TrailerInputDto {
  @InputType()
  export class CreateTrailerInput {
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

    @Field(() => MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput, { nullable: true })
    @IsObject()
    @IsOptional()
    MediaAdditionalInfo: MediaAdditionalInfoInputDto.CreateMediaAdditionalInfoInput;

    @Field(() => AchievementInfoInputDto.CreateAchievementInfoInput, { nullable: true })
    @IsObject()
    @IsOptional()
    AchievementInfo: AchievementInfoInputDto.CreateAchievementInfoInput;
  }
}
