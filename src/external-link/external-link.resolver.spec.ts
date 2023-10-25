import { Test, TestingModule } from '@nestjs/testing';
import { ExternalLinkResolver } from './external-link.resolver';
import { ExternalLinkService } from './external-link.service';

describe('ExternalLinkResolver', () => {
  let resolver: ExternalLinkResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalLinkResolver, ExternalLinkService],
    }).compile();

    resolver = module.get<ExternalLinkResolver>(ExternalLinkResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
