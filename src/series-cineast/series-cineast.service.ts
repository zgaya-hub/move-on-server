import { Injectable } from '@nestjs/common';
import { CreateSeriesCineastInput } from './dto/create-series-cineast.input';
import { UpdateSeriesCineastInput } from './dto/update-series-cineast.input';

@Injectable()
export class SeriesCineastService {
  create(createSeriesCineastInput: CreateSeriesCineastInput) {
    return 'This action adds a new seriesCineast';
  }

  findAll() {
    return `This action returns all seriesCineast`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seriesCineast`;
  }

  update(id: number, updateSeriesCineastInput: UpdateSeriesCineastInput) {
    return `This action updates a #${id} seriesCineast`;
  }

  remove(id: number) {
    return `This action removes a #${id} seriesCineast`;
  }
}
