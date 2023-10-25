import { Test, TestingModule } from '@nestjs/testing';
import { MovieCrewService } from './movie-crew.service';

describe('MovieCrewService', () => {
  let service: MovieCrewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieCrewService],
    }).compile();

    service = module.get<MovieCrewService>(MovieCrewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
