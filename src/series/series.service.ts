import { Injectable } from '@nestjs/common';
import { CreateSeriesInput } from './dto/create-series.input';
import { UpdateSeriesInput } from './dto/update-series.input';

@Injectable()
export class SeriesService {
  create(createSeriesInput: CreateSeriesInput) {
    return 'This action adds a new series';
  }

  findAll() {
    return `This action returns all series`;
  }

  findOne(id: number) {
    return `This action returns a #${id} series`;
  }

  update(id: number, updateSeriesInput: UpdateSeriesInput) {
    return `This action updates a #${id} series`;
  }

  remove(id: number) {
    return `This action removes a #${id} series`;
  }
}
