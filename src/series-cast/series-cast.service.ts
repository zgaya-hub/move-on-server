import { Injectable } from '@nestjs/common';
import { CreateSeriesCastInput } from './dto/create-series-cast.input';
import { UpdateSeriesCastInput } from './dto/update-series-cast.input';

@Injectable()
export class SeriesCastService {
  create(createSeriesCastInput: CreateSeriesCastInput) {
    return 'This action adds a new seriesCast';
  }

  findAll() {
    return `This action returns all seriesCast`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seriesCast`;
  }

  update(id: number, updateSeriesCastInput: UpdateSeriesCastInput) {
    return `This action updates a #${id} seriesCast`;
  }

  remove(id: number) {
    return `This action removes a #${id} seriesCast`;
  }
}
