import { Test, TestingModule } from '@nestjs/testing';
import { TrailerService } from './trailer.service';

describe('TrailerService', () => {
  let service: TrailerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrailerService],
    }).compile();

    service = module.get<TrailerService>(TrailerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
