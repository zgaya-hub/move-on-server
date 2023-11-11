import { Resolver } from '@nestjs/graphql';
import { AchievementInfo } from './entities/achievement-info.entity';

@Resolver(() => AchievementInfo)
export class AchievementInfoResolver {}
