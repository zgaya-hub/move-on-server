/* eslint-disable @typescript-eslint/no-namespace */
import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

export namespace MediaResourceInputDto {
  @InputType()
  export class CreateMediaResourceInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsUUID()
    SignedUrlKeyId: string;
  }
}
