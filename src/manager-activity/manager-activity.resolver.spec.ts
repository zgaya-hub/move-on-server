import { Test, TestingModule } from '@nestjs/testing';
import { ManagerActivityResolver } from './manager-activity.resolver';
import { ManagerActivityService } from './manager-activity.service';

describe('ManagerActivityResolver', () => {
  let resolver: ManagerActivityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerActivityResolver, ManagerActivityService],
    }).compile();

    resolver = module.get<ManagerActivityResolver>(ManagerActivityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
