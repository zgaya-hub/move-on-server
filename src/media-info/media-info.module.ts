import { Module } from '@nestjs/common';
import { MediaInfoService } from './media-info.service';
import { MediaInfoResolver } from './media-info.resolver';

@Module({
  providers: [MediaInfoResolver, MediaInfoService],
})
export class MediaInfoModule {}
