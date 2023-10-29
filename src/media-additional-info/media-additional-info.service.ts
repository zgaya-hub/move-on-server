import { Injectable } from '@nestjs/common';
import { CreateMediaAdditionalInfoInput } from './dto/create-media-additional-info.input';
import { UpdateMediaAdditionalInfoInput } from './dto/update-media-additional-info.input';

@Injectable()
export class MediaAdditionalInfoService {
  create(createMediaAdditionalInfoInput: CreateMediaAdditionalInfoInput) {
    return 'This action adds a new mediaAdditionalInfo';
  }

  findAll() {
    return `This action returns all mediaAdditionalInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mediaAdditionalInfo`;
  }

  update(id: number, updateMediaAdditionalInfoInput: UpdateMediaAdditionalInfoInput) {
    return `This action updates a #${id} mediaAdditionalInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediaAdditionalInfo`;
  }
}
