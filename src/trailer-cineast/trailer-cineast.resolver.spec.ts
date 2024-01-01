import { Test, TestingModule } from '@nestjs/testing';
import { TrailerCineastResolver } from './trailer-cineast.resolver';
import { TrailerCineastService } from './trailer-cineast.service';

describe('TrailerCineastResolver', () => {
  let resolver: TrailerCineastResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrailerCineastResolver, TrailerCineastService],
    }).compile();

    resolver = module.get<TrailerCineastResolver>(TrailerCineastResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
