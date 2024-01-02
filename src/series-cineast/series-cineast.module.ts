import { Module } from '@nestjs/common';
import { SeriesCineastService } from './series-cineast.service';
import { SeriesCineastResolver } from './series-cineast.resolver';
import { SeriesCineastRepository } from './series-cineast.repository';
import { SeriesModule } from 'src/series/series.module';
import { CineastModule } from 'src/cineast/cineast.module';

@Module({
  imports: [SeriesModule, CineastModule],
  providers: [SeriesCineastResolver, SeriesCineastService, SeriesCineastRepository],
})
export class SeriesCineastModule {}
