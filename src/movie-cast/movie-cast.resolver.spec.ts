import { Test, TestingModule } from '@nestjs/testing';
import { MovieCastResolver } from './movie-cast.resolver';
import { MovieCastService } from './movie-cast.service';

describe('MovieCastResolver', () => {
  let resolver: MovieCastResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieCastResolver, MovieCastService],
    }).compile();

    resolver = module.get<MovieCastResolver>(MovieCastResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
