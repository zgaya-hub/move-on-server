import { Test, TestingModule } from '@nestjs/testing';
import { TerminusService } from './terminus.service';

describe('TerminusService', () => {
  let service: TerminusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerminusService],
    }).compile();

    service = module.get<TerminusService>(TerminusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
