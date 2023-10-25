import { Test, TestingModule } from '@nestjs/testing';
import { MediaInfoService } from './media-info.service';

describe('MediaInfoService', () => {
  let service: MediaInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaInfoService],
    }).compile();

    service = module.get<MediaInfoService>(MediaInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
