import { Injectable } from '@nestjs/common';
import { CreateProfileInfoInput } from './dto/create-profile-info.input';
import { UpdateProfileInfoInput } from './dto/update-profile-info.input';

@Injectable()
export class ProfileInfoService {
  create(createProfileInfoInput: CreateProfileInfoInput) {
    return 'This action adds a new profileInfo';
  }

  findAll() {
    return `This action returns all profileInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profileInfo`;
  }

  update(id: number, updateProfileInfoInput: UpdateProfileInfoInput) {
    return `This action updates a #${id} profileInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} profileInfo`;
  }
}
