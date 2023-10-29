import { Module } from '@nestjs/common';
import { VideoResolver } from './video.resolver';
import { VideoService } from './video.service';
import { AwsModule } from '../aws/aws.module';
import { VideoRepository } from './video.repository';
import { EntitySchema } from 'typeorm';
import { AuthModule } from '../auth/auth.module';
import { ManagerModule } from '../manager/manager.module';

@Module({
  imports: [AwsModule, AuthModule, ManagerModule],
  providers: [VideoResolver, VideoService, VideoRepository, EntitySchema],
  exports: [VideoService],
})
export class VideoModule {}
