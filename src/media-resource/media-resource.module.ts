import { Module } from '@nestjs/common';
import { MediaResourceService } from './media-resource.service';
import { MediaResourceResolver } from './media-resource.resolver';
import { RadisModule } from '../radis/radis.module';
import { AwsModule } from '../aws/aws.module';

@Module({
  imports: [RadisModule, AwsModule],
  providers: [MediaResourceResolver, MediaResourceService],
  exports: [MediaResourceService],
})
export class MediaResourceModule {}
