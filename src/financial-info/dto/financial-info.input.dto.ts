/* eslint-disable @typescript-eslint/no-namespace */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

export namespace MediaFinancialInfoInputDto {
  @InputType()
  export class CreateMediaFinancialInfoInput {
    @Field(() => Number)
    @IsNumber()
    @IsNotEmpty()
    MediaNetProfit: number;

    @Field(() => Number)
    @IsNumber()
    @IsNotEmpty()
    MediaBudget: number;

    @Field(() => Number)
    @IsNumber()
    @IsNotEmpty()
    MediaRevenue: number;
  }
}

// zohaib.shahid@northbaysolutions.net
