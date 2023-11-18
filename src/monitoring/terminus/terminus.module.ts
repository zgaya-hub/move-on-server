import { Module } from '@nestjs/common';
import { TerminusService } from './terminus.service';
import { TerminusController } from './terminus.controller';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule as NestTerminusModule } from '@nestjs/terminus';

@Module({
  imports: [
    NestTerminusModule.forRoot({
      errorLogStyle: 'pretty',
    }),
    HttpModule,
  ],
  controllers: [TerminusController],
  providers: [TerminusService],
})
export class TerminusModule {}
