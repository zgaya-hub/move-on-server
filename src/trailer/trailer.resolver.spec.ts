import { Test, TestingModule } from '@nestjs/testing';
import { TrailerResolver } from './trailer.resolver';
import { TrailerService } from './trailer.service';

describe('TrailerResolver', () => {
  let resolver: TrailerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrailerResolver, TrailerService],
    }).compile();

    resolver = module.get<TrailerResolver>(TrailerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
