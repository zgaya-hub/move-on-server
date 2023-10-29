import { Test, TestingModule } from '@nestjs/testing';
import { MediaAdditionalInfoService } from './media-additional-info.service';

describe('MediaAdditionalInfoService', () => {
  let service: MediaAdditionalInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaAdditionalInfoService],
    }).compile();

    service = module.get<MediaAdditionalInfoService>(MediaAdditionalInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
