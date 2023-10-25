import { Module } from '@nestjs/common';
import { ManagerActivityService } from './manager-activity.service';
import { ManagerActivityResolver } from './manager-activity.resolver';

@Module({
  providers: [ManagerActivityResolver, ManagerActivityService],
})
export class ManagerActivityModule {}
