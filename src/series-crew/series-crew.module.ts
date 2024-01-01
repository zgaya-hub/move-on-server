import { Module } from '@nestjs/common';
import { SeriesCrewService } from './series-crew.service';
import { SeriesCrewResolver } from './series-crew.resolver';
import { SeriesCrewRepository } from './series-crew.repository';

@Module({
  providers: [SeriesCrewResolver, SeriesCrewService, SeriesCrewRepository],
})
export class SeriesCrewModule {}
