import { Injectable } from '@nestjs/common';
import { CreateSeasonInput } from './dto/create-season.input';
import { UpdateSeasonInput } from './dto/update-season.input';

@Injectable()
export class SeasonService {
  create(createSeasonInput: CreateSeasonInput) {
    return 'This action adds a new season';
  }

  findAll() {
    return `This action returns all season`;
  }

  findOne(id: number) {
    return `This action returns a #${id} season`;
  }

  update(id: number, updateSeasonInput: UpdateSeasonInput) {
    return `This action updates a #${id} season`;
  }

  remove(id: number) {
    return `This action removes a #${id} season`;
  }
}
