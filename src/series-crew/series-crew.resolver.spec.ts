import { Test, TestingModule } from '@nestjs/testing';
import { SeriesCrewResolver } from './series-crew.resolver';
import { SeriesCrewService } from './series-crew.service';

describe('SeriesCrewResolver', () => {
  let resolver: SeriesCrewResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesCrewResolver, SeriesCrewService],
    }).compile();

    resolver = module.get<SeriesCrewResolver>(SeriesCrewResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
