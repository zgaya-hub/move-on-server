import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AchievementInfoService } from './achievement-info.service';
import { AchievementInfo } from './entities/achievement-info.entity';
import { CreateAchievementInfoInput } from './dto/create-achievement-info.input';
import { UpdateAchievementInfoInput } from './dto/update-achievement-info.input';

@Resolver(() => AchievementInfo)
export class AchievementInfoResolver {
  constructor(private readonly achievementInfoService: AchievementInfoService) {}

  @Mutation(() => AchievementInfo)
  createAchievementInfo(@Args('createAchievementInfoInput') createAchievementInfoInput: CreateAchievementInfoInput) {
    return this.achievementInfoService.create(createAchievementInfoInput);
  }

  @Query(() => [AchievementInfo], { name: 'achievementInfo' })
  findAll() {
    return this.achievementInfoService.findAll();
  }

  @Query(() => AchievementInfo, { name: 'achievementInfo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.achievementInfoService.findOne(id);
  }

  @Mutation(() => AchievementInfo)
  updateAchievementInfo(@Args('updateAchievementInfoInput') updateAchievementInfoInput: UpdateAchievementInfoInput) {
    return this.achievementInfoService.update(updateAchievementInfoInput.id, updateAchievementInfoInput);
  }

  @Mutation(() => AchievementInfo)
  removeAchievementInfo(@Args('id', { type: () => Int }) id: number) {
    return this.achievementInfoService.remove(id);
  }
}
