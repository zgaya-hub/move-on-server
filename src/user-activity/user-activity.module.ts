import { Module } from '@nestjs/common';
import { UserActivityService } from './user-activity.service';
import { UserActivityResolver } from './user-activity.resolver';

@Module({
  providers: [UserActivityResolver, UserActivityService],
})
export class UserActivityModule {}
