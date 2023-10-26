import { Test, TestingModule } from '@nestjs/testing';
import { MediaInformationResolver } from './media-information.resolver';
import { MediaInformationService } from './media-information.service';

describe('MediaInformationResolver', () => {
  let resolver: MediaInformationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaInformationResolver, MediaInformationService],
    }).compile();

    resolver = module.get<MediaInformationResolver>(MediaInformationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
