import { Test, TestingModule } from '@nestjs/testing';
import { MovieCineastService } from './movie-cineast.service';

describe('MovieCineastService', () => {
  let service: MovieCineastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieCineastService],
    }).compile();

    service = module.get<MovieCineastService>(MovieCineastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
