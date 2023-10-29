import { Test, TestingModule } from '@nestjs/testing';
import { MediaBasicInfoResolver } from './media-basic-info.resolver';
import { MediaBasicInfoService } from './media-basic-info.service';

describe('MediaBasicInfoResolver', () => {
  let resolver: MediaBasicInfoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaBasicInfoResolver, MediaBasicInfoService],
    }).compile();

    resolver = module.get<MediaBasicInfoResolver>(MediaBasicInfoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
