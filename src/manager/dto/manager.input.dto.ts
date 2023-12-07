/* eslint-disable @typescript-eslint/no-namespace */
import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export namespace ManagerInputDto {
  @InputType()
  export class ManagerRegisterInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    password: string;
  }

  @InputType()
  export class ManagerSignInInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    email: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    password: string;
  }
}
