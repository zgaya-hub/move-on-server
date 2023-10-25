import { Injectable } from '@nestjs/common';
import { CreateMovieCrewInput } from './dto/create-movie-crew.input';
import { UpdateMovieCrewInput } from './dto/update-movie-crew.input';

@Injectable()
export class MovieCrewService {
  create(createMovieCrewInput: CreateMovieCrewInput) {
    return 'This action adds a new movieCrew';
  }

  findAll() {
    return `This action returns all movieCrew`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movieCrew`;
  }

  update(id: number, updateMovieCrewInput: UpdateMovieCrewInput) {
    return `This action updates a #${id} movieCrew`;
  }

  remove(id: number) {
    return `This action removes a #${id} movieCrew`;
  }
}
