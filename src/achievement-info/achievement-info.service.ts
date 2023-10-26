import { Injectable } from '@nestjs/common';
import { CreateAchievementInfoInput } from './dto/create-achievement-info.input';
import { UpdateAchievementInfoInput } from './dto/update-achievement-info.input';

@Injectable()
export class AchievementInfoService {
  create(createAchievementInfoInput: CreateAchievementInfoInput) {
    return 'This action adds a new achievementInfo';
  }

  findAll() {
    return `This action returns all achievementInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} achievementInfo`;
  }

  update(id: number, updateAchievementInfoInput: UpdateAchievementInfoInput) {
    return `This action updates a #${id} achievementInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} achievementInfo`;
  }
}
