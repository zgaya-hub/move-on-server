/* eslint-disable @typescript-eslint/no-namespace */
import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export namespace RadisInputDto {
  @InputType()
  export class StoreStringValueInTempStorageInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    value: string;

    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    ttl: number;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    service: string;
  }

  @InputType()
  export class RetrieveStringValueFromTempStorageInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    key: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    service: string;
  }
}
