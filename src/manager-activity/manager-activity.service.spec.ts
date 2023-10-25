import { Test, TestingModule } from '@nestjs/testing';
import { ManagerActivityService } from './manager-activity.service';

describe('ManagerActivityService', () => {
  let service: ManagerActivityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerActivityService],
    }).compile();

    service = module.get<ManagerActivityService>(ManagerActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
