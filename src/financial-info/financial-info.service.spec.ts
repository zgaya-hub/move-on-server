import { Test, TestingModule } from '@nestjs/testing';
import { FinancialInfoService } from './financial-info.service';

describe('FinancialInfoService', () => {
  let service: FinancialInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancialInfoService],
    }).compile();

    service = module.get<FinancialInfoService>(FinancialInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
