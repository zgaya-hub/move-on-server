import { Test, TestingModule } from '@nestjs/testing';
import { UserActivityResolver } from './user-activity.resolver';
import { UserActivityService } from './user-activity.service';

describe('UserActivityResolver', () => {
  let resolver: UserActivityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserActivityResolver, UserActivityService],
    }).compile();

    resolver = module.get<UserActivityResolver>(UserActivityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
