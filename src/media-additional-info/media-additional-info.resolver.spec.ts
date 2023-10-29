import { Test, TestingModule } from '@nestjs/testing';
import { MediaAdditionalInfoResolver } from './media-additional-info.resolver';
import { MediaAdditionalInfoService } from './media-additional-info.service';

describe('MediaAdditionalInfoResolver', () => {
  let resolver: MediaAdditionalInfoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaAdditionalInfoResolver, MediaAdditionalInfoService],
    }).compile();

    resolver = module.get<MediaAdditionalInfoResolver>(MediaAdditionalInfoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
