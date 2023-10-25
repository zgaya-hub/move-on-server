import { Injectable } from '@nestjs/common';
import { CreateCineastInput } from './dto/create-cineast.input';
import { UpdateCineastInput } from './dto/update-cineast.input';

@Injectable()
export class CineastService {
  create(createCineastInput: CreateCineastInput) {
    return 'This action adds a new cineast';
  }

  findAll() {
    return `This action returns all cineast`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cineast`;
  }

  update(id: number, updateCineastInput: UpdateCineastInput) {
    return `This action updates a #${id} cineast`;
  }

  remove(id: number) {
    return `This action removes a #${id} cineast`;
  }
}
