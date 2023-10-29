import { Module } from '@nestjs/common';
import { VideoResolver } from './video.resolver';
import { VideoService } from './video.service';
import { AwsModule } from '../aws/aws.module';
import { VideoRepository } from './video.repository';
import { EntitySchema } from 'typeorm';

@Module({
  imports: [AwsModule],
  providers: [VideoResolver, VideoService, VideoRepository, EntitySchema],
})
export class VideoModule {}
