import { Module } from '@nestjs/common';
import { MovieCastService } from './movie-cast.service';
import { MovieCastResolver } from './movie-cast.resolver';

@Module({
  providers: [MovieCastResolver, MovieCastService],
})
export class MovieCastModule {}
