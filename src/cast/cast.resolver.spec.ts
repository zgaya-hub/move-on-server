import { Test, TestingModule } from '@nestjs/testing';
import { CastResolver } from './cast.resolver';
import { CastService } from './cast.service';

describe('CastResolver', () => {
  let resolver: CastResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CastResolver, CastService],
    }).compile();

    resolver = module.get<CastResolver>(CastResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
