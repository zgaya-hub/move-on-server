import { Test, TestingModule } from '@nestjs/testing';
import { ProfileInfoResolver } from './profile-info.resolver';
import { ProfileInfoService } from './profile-info.service';

describe('ProfileInfoResolver', () => {
  let resolver: ProfileInfoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileInfoResolver, ProfileInfoService],
    }).compile();

    resolver = module.get<ProfileInfoResolver>(ProfileInfoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
