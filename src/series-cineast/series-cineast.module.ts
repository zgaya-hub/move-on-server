import { Module } from '@nestjs/common';
import { SeriesCineastService } from './series-cineast.service';
import { SeriesCineastResolver } from './series-cineast.resolver';
import { SeriesCineastRepository } from './series-cineast.repository';

@Module({
  providers: [SeriesCineastResolver, SeriesCineastService, SeriesCineastRepository],
})
export class SeriesCineastModule {}
