import { Test, TestingModule } from '@nestjs/testing';
import { ErrorLogResolver } from './error-log.resolver';
import { ErrorLogService } from './error-log.service';

describe('ErrorLogResolver', () => {
  let resolver: ErrorLogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErrorLogResolver, ErrorLogService],
    }).compile();

    resolver = module.get<ErrorLogResolver>(ErrorLogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
