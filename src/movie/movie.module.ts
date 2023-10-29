import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieResolver } from './movie.resolver';
import { VideoModule } from '../video/video.module';

@Module({
  imports: [VideoModule],
  providers: [MovieResolver, MovieService],
})
export class MovieModule {}
