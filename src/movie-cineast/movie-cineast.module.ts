import { Module } from '@nestjs/common';
import { MovieCineastService } from './movie-cineast.service';
import { MovieCineastResolver } from './movie-cineast.resolver';

@Module({
  providers: [MovieCineastResolver, MovieCineastService],
})
export class MovieCineastModule {}
