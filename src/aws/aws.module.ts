import { Module } from '@nestjs/common';
import { AwsService } from './aws.service';
import { AwsS3Module } from './aws-s3/aws-s3.module';

@Module({
  imports: [AwsS3Module],
  providers: [AwsService],
  exports: [AwsS3Module],
})
export class AwsModule {}
