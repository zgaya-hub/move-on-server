import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageResolver } from './image.resolver';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { ImageRepository } from './image.repository';

@Module({
  imports: [CloudinaryModule],
  providers: [ImageResolver, ImageService, ImageRepository],
  exports: [ImageService],
})
export class ImageModule {}
