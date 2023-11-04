import { Module } from '@nestjs/common';
import { MediaImageService } from './media-image.service';
import { MediaImageResolver } from './media-image.resolver';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  imports: [CloudinaryModule],
  providers: [MediaImageResolver, MediaImageService],
})
export class MediaImageModule {}
