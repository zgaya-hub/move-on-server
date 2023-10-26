import { Test, TestingModule } from '@nestjs/testing';
import { AchievementInfoResolver } from './achievement-info.resolver';
import { AchievementInfoService } from './achievement-info.service';

describe('AchievementInfoResolver', () => {
  let resolver: AchievementInfoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AchievementInfoResolver, AchievementInfoService],
    }).compile();

    resolver = module.get<AchievementInfoResolver>(AchievementInfoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
