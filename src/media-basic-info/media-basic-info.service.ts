import { Injectable } from '@nestjs/common';
import { CreateMediaBasicInfoInput } from './dto/create-media-basic-info.input';
import { UpdateMediaBasicInfoInput } from './dto/update-media-basic-info.input';

@Injectable()
export class MediaBasicInfoService {
  create(createMediaBasicInfoInput: CreateMediaBasicInfoInput) {
    return 'This action adds a new mediaBasicInfo';
  }

  findAll() {
    return `This action returns all mediaBasicInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mediaBasicInfo`;
  }

  update(id: number, updateMediaBasicInfoInput: UpdateMediaBasicInfoInput) {
    return `This action updates a #${id} mediaBasicInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediaBasicInfo`;
  }
}
