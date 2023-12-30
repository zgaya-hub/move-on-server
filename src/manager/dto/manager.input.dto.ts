/* eslint-disable @typescript-eslint/no-namespace */
import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export namespace ManagerInputDto {
  @InputType()
  export class ManagerRegisterInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsEmail()
    Email: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    Password: string;
  }

  @InputType()
  export class ManagerSignInInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    Email: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    Password: string;
  }
}
