import { Test, TestingModule } from '@nestjs/testing';
import { CrewService } from './crew.service';

describe('CrewService', () => {
  let service: CrewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrewService],
    }).compile();

    service = module.get<CrewService>(CrewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
