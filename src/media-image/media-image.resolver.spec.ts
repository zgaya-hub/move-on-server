import { Test, TestingModule } from '@nestjs/testing';
import { MediaImageResolver } from './media-image.resolver';
import { MediaImageService } from './media-image.service';

describe('MediaImageResolver', () => {
  let resolver: MediaImageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaImageResolver, MediaImageService],
    }).compile();

    resolver = module.get<MediaImageResolver>(MediaImageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
