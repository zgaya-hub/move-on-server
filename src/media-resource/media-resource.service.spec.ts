import { Test, TestingModule } from '@nestjs/testing';
import { MediaResourceService } from './media-resource.service';

describe('MediaResourceService', () => {
  let service: MediaResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaResourceService],
    }).compile();

    service = module.get<MediaResourceService>(MediaResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
