import { Test, TestingModule } from '@nestjs/testing';
import { MediaInfoResolver } from './media-info.resolver';
import { MediaInfoService } from './media-info.service';

describe('MediaInfoResolver', () => {
  let resolver: MediaInfoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaInfoResolver, MediaInfoService],
    }).compile();

    resolver = module.get<MediaInfoResolver>(MediaInfoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
