import { Resolver } from '@nestjs/graphql';
import { FinancialInfoService } from './financial-info.service';
import { FinancialInfo } from '@/financial-info/entities/financial-info.entity';

@Resolver(() => FinancialInfo)
export class FinancialInfoResolver {
  constructor(private readonly financialInfoService: FinancialInfoService) {}
}
