import { Module } from '@nestjs/common';
import { SeasonService } from './season.service';
import { SeasonResolver } from './season.resolver';

@Module({
  providers: [SeasonResolver, SeasonService],
})
export class SeasonModule {}
