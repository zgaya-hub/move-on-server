import { Module } from '@nestjs/common';
import { SeriesCrewService } from './series-crew.service';
import { SeriesCrewResolver } from './series-crew.resolver';

@Module({
  providers: [SeriesCrewResolver, SeriesCrewService],
})
export class SeriesCrewModule {}
