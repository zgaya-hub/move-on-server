import { Test, TestingModule } from '@nestjs/testing';
import { RadisService } from './radis.service';

describe('RadisService', () => {
  let service: RadisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RadisService],
    }).compile();

    service = module.get<RadisService>(RadisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
