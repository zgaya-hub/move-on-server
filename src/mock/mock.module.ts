import { Module } from '@nestjs/common';
import { MockService } from './mock.service';

@Module({
  providers: [MockService],
  exports: [MockService],
})
export class MockModule {}
