import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieResolver } from './movie.resolver';
import { VideoModule } from '../video/video.module';
import { ManagerModule } from '../manager/manager.module';

@Module({
  imports: [VideoModule, ManagerModule],
  providers: [MovieResolver, MovieService],
})
export class MovieModule {}
