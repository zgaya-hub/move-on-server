import { Test, TestingModule } from '@nestjs/testing';
import { MediaImageService } from './media-image.service';

describe('MediaImageService', () => {
  let service: MediaImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaImageService],
    }).compile();

    service = module.get<MediaImageService>(MediaImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
