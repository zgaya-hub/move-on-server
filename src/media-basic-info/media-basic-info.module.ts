import { Module } from '@nestjs/common';
import { MediaBasicInfoService } from './media-basic-info.service';
import { MediaBasicInfoResolver } from './media-basic-info.resolver';

@Module({
  providers: [MediaBasicInfoResolver, MediaBasicInfoService],
  exports: [MediaBasicInfoService],
})
export class MediaBasicInfoModule {}
