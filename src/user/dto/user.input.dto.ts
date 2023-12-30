/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export namespace UserInputDto {
  @InputType()
  export class UserRegisterInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsEmail()
    Email: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsStrongPassword()
    Password: string;
  }

  @InputType()
  export class UserSignInInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsEmail()
    Email: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    Password: string;
  }
}
