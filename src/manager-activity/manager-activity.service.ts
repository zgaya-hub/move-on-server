import { Injectable } from '@nestjs/common';
import { CreateManagerActivityInput } from './dto/create-manager-activity.input';
import { UpdateManagerActivityInput } from './dto/update-manager-activity.input';

@Injectable()
export class ManagerActivityService {
  create(createManagerActivityInput: CreateManagerActivityInput) {
    return 'This action adds a new managerActivity';
  }

  findAll() {
    return `This action returns all managerActivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} managerActivity`;
  }

  update(id: number, updateManagerActivityInput: UpdateManagerActivityInput) {
    return `This action updates a #${id} managerActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} managerActivity`;
  }
}
