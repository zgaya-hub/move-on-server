import { Module } from '@nestjs/common';
import { AwsS3Service } from './aws-s3.service';
import { RadisModule } from '@/radis/radis.module';

@Module({
  imports: [RadisModule],
  providers: [AwsS3Service],
  exports: [AwsS3Service],
})
export class AwsS3Module {}
