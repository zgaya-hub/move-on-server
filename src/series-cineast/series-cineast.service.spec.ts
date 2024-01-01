import { Test, TestingModule } from '@nestjs/testing';
import { SeriesCineastService } from './series-cineast.service';

describe('SeriesCineastService', () => {
  let service: SeriesCineastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesCineastService],
    }).compile();

    service = module.get<SeriesCineastService>(SeriesCineastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
