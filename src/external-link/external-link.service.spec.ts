import { Test, TestingModule } from '@nestjs/testing';
import { ExternalLinkService } from './external-link.service';

describe('ExternalLinkService', () => {
  let service: ExternalLinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalLinkService],
    }).compile();

    service = module.get<ExternalLinkService>(ExternalLinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
