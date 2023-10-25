import { Test, TestingModule } from '@nestjs/testing';
import { SeriesCastService } from './series-cast.service';

describe('SeriesCastService', () => {
  let service: SeriesCastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesCastService],
    }).compile();

    service = module.get<SeriesCastService>(SeriesCastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
