import { Test, TestingModule } from '@nestjs/testing';
import { MovieResolver } from './movie.resolver';
import { MovieService } from './movie.service';

describe('MovieResolver', () => {
  let resolver: MovieResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieResolver, MovieService],
    }).compile();

    resolver = module.get<MovieResolver>(MovieResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
