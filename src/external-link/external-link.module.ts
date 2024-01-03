import { Module } from '@nestjs/common';
import { ExternalLinkService } from './external-link.service';
import { ExternalLinkResolver } from './external-link.resolver';
import { CineastModule } from 'src/cineast/cineast.module';
import { SeriesModule } from 'src/series/series.module';
import { MovieModule } from 'src/movie/movie.module';
import { EpisodeModule } from 'src/episode/episode.module';
import { TrailerModule } from 'src/trailer/trailer.module';

@Module({
  imports: [CineastModule, SeriesModule, MovieModule, EpisodeModule, TrailerModule],
  providers: [ExternalLinkResolver, ExternalLinkService],
})
export class ExternalLinkModule {}
