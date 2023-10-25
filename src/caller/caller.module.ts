import { Module } from '@nestjs/common';
import { CallerService } from './caller.service';

@Module({
  providers: [CallerService],
  exports: [CallerService],
})
export class CallerModule {}
