import { Test, TestingModule } from '@nestjs/testing';
import { MovieCastService } from './movie-cast.service';

describe('MovieCastService', () => {
  let service: MovieCastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieCastService],
    }).compile();

    service = module.get<MovieCastService>(MovieCastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
