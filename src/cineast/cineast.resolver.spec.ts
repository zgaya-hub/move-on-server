import { Test, TestingModule } from '@nestjs/testing';
import { CineastResolver } from './cineast.resolver';
import { CineastService } from './cineast.service';

describe('CineastResolver', () => {
  let resolver: CineastResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CineastResolver, CineastService],
    }).compile();

    resolver = module.get<CineastResolver>(CineastResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
