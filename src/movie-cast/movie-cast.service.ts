import { Injectable } from '@nestjs/common';
import { CreateMovieCastInput } from './dto/create-movie-cast.input';
import { UpdateMovieCastInput } from './dto/update-movie-cast.input';

@Injectable()
export class MovieCastService {
  create(createMovieCastInput: CreateMovieCastInput) {
    return 'This action adds a new movieCast';
  }

  findAll() {
    return `This action returns all movieCast`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movieCast`;
  }

  update(id: number, updateMovieCastInput: UpdateMovieCastInput) {
    return `This action updates a #${id} movieCast`;
  }

  remove(id: number) {
    return `This action removes a #${id} movieCast`;
  }
}
