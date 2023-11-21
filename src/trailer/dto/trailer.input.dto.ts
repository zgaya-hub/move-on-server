/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsObject, IsUUID, IsOptional, IsEnum } from 'class-validator';
import { MediaBasicInfoInputDto } from '@/media-basic-info/dto/media-basic-info.input.dto';
import { TrailerMediaEnum } from '../enum/trailer.enum';

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

    @Field(() => String)
    @IsOptional()
    @IsEnum(TrailerMediaEnum)
    MediaType: TrailerMediaEnum;

    @Field(() => String)
    @IsOptional()
    @IsUUID()
    MediaId: string;
  }
}
