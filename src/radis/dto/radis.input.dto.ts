/* eslint-disable @typescript-eslint/no-namespace */
import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export namespace RadisInputDto {
  @InputType()
  export class StoreStringValueInTempStorageInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    Value: string;

    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    TTL: number;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    Service: string;
  }

  @InputType()
  export class RetrieveStringValueFromTempStorageInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    Key: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    Service: string;
  }
}
