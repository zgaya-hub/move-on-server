import { Test, TestingModule } from '@nestjs/testing';
import { CastService } from './cast.service';

describe('CastService', () => {
  let service: CastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CastService],
    }).compile();

    service = module.get<CastService>(CastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
