import { Module } from '@nestjs/common';
import { FinancialInfoService } from './financial-info.service';
import { FinancialInfoResolver } from './financial-info.resolver';

@Module({
  providers: [FinancialInfoResolver, FinancialInfoService],
  exports: [FinancialInfoService],
})
export class FinancialInfoModule {}
