import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FinancialInfoService } from './financial-info.service';
import { FinancialInfo } from '@/financial-info/entities/financial-info.entity';
import { CreateFinancialInfoInput } from './dto/create-financial-info.input';
import { UpdateFinancialInfoInput } from './dto/update-financial-info.input';

@Resolver(() => FinancialInfo)
export class FinancialInfoResolver {
  constructor(private readonly financialInfoService: FinancialInfoService) {}

  @Mutation(() => FinancialInfo)
  createFinancialInfo(@Args('createFinancialInfoInput') createFinancialInfoInput: CreateFinancialInfoInput) {
    return this.financialInfoService.create(createFinancialInfoInput);
  }

  @Query(() => [FinancialInfo], { name: 'financialInfo' })
  findAll() {
    return this.financialInfoService.findAll();
  }

  @Query(() => FinancialInfo, { name: 'financialInfo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.financialInfoService.findOne(id);
  }

  @Mutation(() => FinancialInfo)
  updateFinancialInfo(@Args('updateFinancialInfoInput') updateFinancialInfoInput: UpdateFinancialInfoInput) {
    return this.financialInfoService.update(updateFinancialInfoInput.id, updateFinancialInfoInput);
  }

  @Mutation(() => FinancialInfo)
  removeFinancialInfo(@Args('id', { type: () => Int }) id: number) {
    return this.financialInfoService.remove(id);
  }
}
