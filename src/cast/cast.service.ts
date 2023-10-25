import { Injectable } from '@nestjs/common';
import { CreateCastInput } from './dto/create-cast.input';
import { UpdateCastInput } from './dto/update-cast.input';

@Injectable()
export class CastService {
  create(createCastInput: CreateCastInput) {
    return 'This action adds a new cast';
  }

  findAll() {
    return `This action returns all cast`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cast`;
  }

  update(id: number, updateCastInput: UpdateCastInput) {
    return `This action updates a #${id} cast`;
  }

  remove(id: number) {
    return `This action removes a #${id} cast`;
  }
}
