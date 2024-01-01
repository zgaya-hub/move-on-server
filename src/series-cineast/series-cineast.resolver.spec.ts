import { Test, TestingModule } from '@nestjs/testing';
import { SeriesCineastResolver } from './series-cineast.resolver';
import { SeriesCineastService } from './series-cineast.service';

describe('SeriesCineastResolver', () => {
  let resolver: SeriesCineastResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesCineastResolver, SeriesCineastService],
    }).compile();

    resolver = module.get<SeriesCineastResolver>(SeriesCineastResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
