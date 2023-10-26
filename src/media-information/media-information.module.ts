import { Module } from '@nestjs/common';
import { MediaInformationService } from './media-information.service';
import { MediaInformationResolver } from './media-information.resolver';

@Module({
  providers: [MediaInformationResolver, MediaInformationService]
})
export class MediaInformationModule {}
