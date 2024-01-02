/* eslint-disable @typescript-eslint/no-namespace */

import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { CineastProfessionEnum } from '../enum/cineast.enum';
import { GenderEnum, MediaCountriesEnum } from 'src/common/enum/common.enum';

export namespace CineastInputDto {
  @InputType()
  export class CreateCineastInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    ImageId: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    FullName: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(CineastProfessionEnum)
    Profession: CineastProfessionEnum;

    @Field(() => String)
    @IsNotEmpty()
    @IsNumber()
    DateOfBirth: number;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    Bio: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(GenderEnum)
    Gender: GenderEnum;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(MediaCountriesEnum)
    Country: MediaCountriesEnum;

    @Field(() => String)
    @IsNotEmpty()
    @IsString({ each: true })
    @IsArray()
    Award: string[];
  }
}
