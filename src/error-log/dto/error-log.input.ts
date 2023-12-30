/* eslint-disable @typescript-eslint/no-namespace */
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ErrorLogTypeEnum } from '../enum/error-log.enum';

export namespace ErrorLogInputDto {
  @InputType()
  export class CreateErrorLogInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    Message: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(ErrorLogTypeEnum)
    Type: ErrorLogTypeEnum;

    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    StatusCode: number;
  }
}
