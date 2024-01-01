import { Test, TestingModule } from '@nestjs/testing';
import { MovieCineastResolver } from './movie-cineast.resolver';
import { MovieCineastService } from './movie-cineast.service';

describe('MovieCineastResolver', () => {
  let resolver: MovieCineastResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieCineastResolver, MovieCineastService],
    }).compile();

    resolver = module.get<MovieCineastResolver>(MovieCineastResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
