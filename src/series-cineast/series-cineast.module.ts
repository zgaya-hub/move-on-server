import { Module } from '@nestjs/common';
import { SeriesCineastService } from './series-cineast.service';
import { SeriesCineastResolver } from './series-cineast.resolver';

@Module({
  providers: [SeriesCineastResolver, SeriesCineastService]
})
export class SeriesCineastModule {}
