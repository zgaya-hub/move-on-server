import { Module } from '@nestjs/common';
import { SeriesCastService } from './series-cast.service';
import { SeriesCastResolver } from './series-cast.resolver';

@Module({
  providers: [SeriesCastResolver, SeriesCastService],
})
export class SeriesCastModule {}
