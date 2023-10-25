import { Test, TestingModule } from '@nestjs/testing';
import { SeriesCastResolver } from './series-cast.resolver';
import { SeriesCastService } from './series-cast.service';

describe('SeriesCastResolver', () => {
  let resolver: SeriesCastResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesCastResolver, SeriesCastService],
    }).compile();

    resolver = module.get<SeriesCastResolver>(SeriesCastResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
