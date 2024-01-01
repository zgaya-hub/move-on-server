import { Injectable } from '@nestjs/common';
import { CreateMovieCineastInput } from './dto/create-movie-cineast.input';
import { UpdateMovieCineastInput } from './dto/update-movie-cineast.input';

@Injectable()
export class MovieCineastService {
  create(createMovieCineastInput: CreateMovieCineastInput) {
    return 'This action adds a new movieCineast';
  }

  findAll() {
    return `This action returns all movieCineast`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movieCineast`;
  }

  update(id: number, updateMovieCineastInput: UpdateMovieCineastInput) {
    return `This action updates a #${id} movieCineast`;
  }

  remove(id: number) {
    return `This action removes a #${id} movieCineast`;
  }
}
