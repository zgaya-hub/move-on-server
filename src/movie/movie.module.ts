import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieResolver } from './movie.resolver';

@Module({
  providers: [MovieResolver, MovieService],
})
export class MovieModule {}
