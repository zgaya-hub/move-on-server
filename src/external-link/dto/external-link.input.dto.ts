/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ExternalLinkParentEnum } from '../enum/external-link.enum';

export namespace ExternalLinkInputDto {
  @InputType()
  export class CreateExternalLinkInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    ResourceName: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    Url: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    ParentId: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsEnum(ExternalLinkParentEnum)
    ParentType: ExternalLinkParentEnum;
  }
}
