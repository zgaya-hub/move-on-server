import { Module } from '@nestjs/common';
import { ErrorLogService } from './error-log.service';
import { ErrorLogResolver } from './error-log.resolver';

@Module({
  providers: [ErrorLogResolver, ErrorLogService],
})
export class ErrorLogModule {}
