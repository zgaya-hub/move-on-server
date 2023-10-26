import { Test, TestingModule } from '@nestjs/testing';
import { MediaInformationService } from './media-information.service';

describe('MediaInformationService', () => {
  let service: MediaInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaInformationService],
    }).compile();

    service = module.get<MediaInformationService>(MediaInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
