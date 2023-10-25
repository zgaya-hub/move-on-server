import { Injectable } from '@nestjs/common';
import { CreateUserActivityInput } from './dto/create-user-activity.input';
import { UpdateUserActivityInput } from './dto/update-user-activity.input';

@Injectable()
export class UserActivityService {
  create(createUserActivityInput: CreateUserActivityInput) {
    return 'This action adds a new userActivity';
  }

  findAll() {
    return `This action returns all userActivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userActivity`;
  }

  update(id: number, updateUserActivityInput: UpdateUserActivityInput) {
    return `This action updates a #${id} userActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} userActivity`;
  }
}
