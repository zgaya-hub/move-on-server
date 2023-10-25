import { Test, TestingModule } from '@nestjs/testing';
import { MovieCrewResolver } from './movie-crew.resolver';
import { MovieCrewService } from './movie-crew.service';

describe('MovieCrewResolver', () => {
  let resolver: MovieCrewResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieCrewResolver, MovieCrewService],
    }).compile();

    resolver = module.get<MovieCrewResolver>(MovieCrewResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
