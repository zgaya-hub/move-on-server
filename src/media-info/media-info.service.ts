import { Injectable } from '@nestjs/common';
import { CreateMediaInfoInput } from './dto/create-media-info.input';
import { UpdateMediaInfoInput } from './dto/update-media-info.input';

@Injectable()
export class MediaInfoService {
  create(createMediaInfoInput: CreateMediaInfoInput) {
    return 'This action adds a new mediaInfo';
  }

  findAll() {
    return `This action returns all mediaInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mediaInfo`;
  }

  update(id: number, updateMediaInfoInput: UpdateMediaInfoInput) {
    return `This action updates a #${id} mediaInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediaInfo`;
  }
}
