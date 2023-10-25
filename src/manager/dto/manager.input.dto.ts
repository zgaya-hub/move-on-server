/* eslint-disable @typescript-eslint/no-namespace */
import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export namespace ManagerInputDto {
  @InputType()
  export class ManagerRegisterInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
  }

  @InputType()
  export class ManagerLoginInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
  }
}
