import { Test, TestingModule } from '@nestjs/testing';
import { TrailerCineastService } from './trailer-cineast.service';

describe('TrailerCineastService', () => {
  let service: TrailerCineastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrailerCineastService],
    }).compile();

    service = module.get<TrailerCineastService>(TrailerCineastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
