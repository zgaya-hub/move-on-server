import { Test, TestingModule } from '@nestjs/testing';
import { FinancialInfoResolver } from './financial-info.resolver';
import { FinancialInfoService } from './financial-info.service';

describe('FinancialInfoResolver', () => {
  let resolver: FinancialInfoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancialInfoResolver, FinancialInfoService],
    }).compile();

    resolver = module.get<FinancialInfoResolver>(FinancialInfoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
