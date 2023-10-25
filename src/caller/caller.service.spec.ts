import { Test, TestingModule } from '@nestjs/testing';
import { CallerService } from './caller.service';

describe('CallerService', () => {
  let service: CallerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CallerService],
    }).compile();

    service = module.get<CallerService>(CallerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
