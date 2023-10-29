import { Test, TestingModule } from '@nestjs/testing';
import { MediaBasicInfoService } from './media-basic-info.service';

describe('MediaBasicInfoService', () => {
  let service: MediaBasicInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaBasicInfoService],
    }).compile();

    service = module.get<MediaBasicInfoService>(MediaBasicInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
