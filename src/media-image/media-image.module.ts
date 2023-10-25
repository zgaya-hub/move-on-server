import { Module } from '@nestjs/common';
import { MediaImageService } from './media-image.service';
import { MediaImageResolver } from './media-image.resolver';

@Module({
  providers: [MediaImageResolver, MediaImageService],
})
export class MediaImageModule {}
