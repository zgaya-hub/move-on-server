import { Test, TestingModule } from '@nestjs/testing';
import { MediaResourceResolver } from './media-resource.resolver';
import { MediaResourceService } from './media-resource.service';

describe('MediaResourceResolver', () => {
  let resolver: MediaResourceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaResourceResolver, MediaResourceService],
    }).compile();

    resolver = module.get<MediaResourceResolver>(MediaResourceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
