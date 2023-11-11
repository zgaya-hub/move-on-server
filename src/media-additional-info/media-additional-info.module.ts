import { Module } from '@nestjs/common';
import { MediaAdditionalInfoService } from './media-additional-info.service';
import { MediaAdditionalInfoResolver } from './media-additional-info.resolver';

@Module({
  providers: [MediaAdditionalInfoResolver, MediaAdditionalInfoService],
  exports: [MediaAdditionalInfoService],
})
export class MediaAdditionalInfoModule {}
