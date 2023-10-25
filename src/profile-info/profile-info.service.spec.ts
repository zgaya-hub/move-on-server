import { Test, TestingModule } from '@nestjs/testing';
import { ProfileInfoService } from './profile-info.service';

describe('ProfileInfoService', () => {
  let service: ProfileInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileInfoService],
    }).compile();

    service = module.get<ProfileInfoService>(ProfileInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
