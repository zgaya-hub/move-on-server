import { Injectable } from '@nestjs/common';
import { CreateCrewInput } from './dto/create-crew.input';
import { UpdateCrewInput } from './dto/update-crew.input';

@Injectable()
export class CrewService {
  create(createCrewInput: CreateCrewInput) {
    return 'This action adds a new crew';
  }

  findAll() {
    return `This action returns all crew`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crew`;
  }

  update(id: number, updateCrewInput: UpdateCrewInput) {
    return `This action updates a #${id} crew`;
  }

  remove(id: number) {
    return `This action removes a #${id} crew`;
  }
}
