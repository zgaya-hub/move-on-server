import { Injectable } from '@nestjs/common';
import { CreateSeriesCrewInput } from './dto/create-series-crew.input';
import { UpdateSeriesCrewInput } from './dto/update-series-crew.input';

@Injectable()
export class SeriesCrewService {
  create(createSeriesCrewInput: CreateSeriesCrewInput) {
    return 'This action adds a new seriesCrew';
  }

  findAll() {
    return `This action returns all seriesCrew`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seriesCrew`;
  }

  update(id: number, updateSeriesCrewInput: UpdateSeriesCrewInput) {
    return `This action updates a #${id} seriesCrew`;
  }

  remove(id: number) {
    return `This action removes a #${id} seriesCrew`;
  }
}
