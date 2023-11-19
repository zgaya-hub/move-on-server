import { Module } from '@nestjs/common';
import { MediaImageService } from './media-image.service';
import { MediaImageResolver } from './media-image.resolver';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { MediaImageRepository } from './media-image.repository';

@Module({
  imports: [CloudinaryModule],
  providers: [MediaImageResolver, MediaImageService, MediaImageRepository],
  exports: [MediaImageService],
})
export class MediaImageModule {}
