import { Injectable } from '@nestjs/common';
import { CreateTrailerCineastInput } from './dto/create-trailer-cineast.input';
import { UpdateTrailerCineastInput } from './dto/update-trailer-cineast.input';

@Injectable()
export class TrailerCineastService {
  create(createTrailerCineastInput: CreateTrailerCineastInput) {
    return 'This action adds a new trailerCineast';
  }

  findAll() {
    return `This action returns all trailerCineast`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trailerCineast`;
  }

  update(id: number, updateTrailerCineastInput: UpdateTrailerCineastInput) {
    return `This action updates a #${id} trailerCineast`;
  }

  remove(id: number) {
    return `This action removes a #${id} trailerCineast`;
  }
}
