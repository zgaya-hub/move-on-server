/* eslint-disable @typescript-eslint/no-namespace */
import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export namespace RadisInputDto {
  @InputType()
  export class StoreDataInStorageInput<T> {
    @Field(() => JSON)
    @IsNotEmpty()
    data: T;

    @Field(() => Number)
    @IsNotEmpty()
    @IsNumber()
    ttl: number;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    service: string;
  }
}
