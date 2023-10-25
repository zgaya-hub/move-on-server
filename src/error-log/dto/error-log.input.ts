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
    message: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(ErrorLogTypeEnum)
    type: ErrorLogTypeEnum;

    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    statusCode: number;
  }
}
