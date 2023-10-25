import { Module } from '@nestjs/common';
import { SeriesResolver } from './series.resolver';
import { SeriesService } from './series.service';

@Module({
  providers: [SeriesResolver, SeriesService],
})
export class SeriesModule {}
