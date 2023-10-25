import { Test, TestingModule } from '@nestjs/testing';
import { CineastService } from './cineast.service';

describe('CineastService', () => {
  let service: CineastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CineastService],
    }).compile();

    service = module.get<CineastService>(CineastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
