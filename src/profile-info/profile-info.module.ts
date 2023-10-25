import { Module } from '@nestjs/common';
import { ProfileInfoService } from './profile-info.service';
import { ProfileInfoResolver } from './profile-info.resolver';

@Module({
  providers: [ProfileInfoResolver, ProfileInfoService],
})
export class ProfileInfoModule {}
