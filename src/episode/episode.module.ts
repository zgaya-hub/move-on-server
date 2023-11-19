import { Module } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { EpisodeResolver } from './episode.resolver';
import { VideoModule } from '../video/video.module';
import { MediaBasicInfoModule } from '../media-basic-info/media-basic-info.module';
import { SeasonModule } from '../season/season.module';
import { MediaResourceModule } from '../media-resource/media-resource.module';
import { MediaImageModule } from '../media-image/media-image.module';

@Module({
  imports: [VideoModule, MediaBasicInfoModule, SeasonModule, MediaResourceModule, MediaImageModule],
  providers: [EpisodeResolver, EpisodeService],
})
export class EpisodeModule {}
