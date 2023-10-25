import { Test, TestingModule } from '@nestjs/testing';
import { SeriesCrewService } from './series-crew.service';

describe('SeriesCrewService', () => {
  let service: SeriesCrewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesCrewService],
    }).compile();

    service = module.get<SeriesCrewService>(SeriesCrewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
