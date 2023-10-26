import { Injectable } from '@nestjs/common';
import { CreateMediaInformationInput } from './dto/create-media-information.input';
import { UpdateMediaInformationInput } from './dto/update-media-information.input';

@Injectable()
export class MediaInformationService {
  create(createMediaInformationInput: CreateMediaInformationInput) {
    return 'This action adds a new mediaInformation';
  }

  findAll() {
    return `This action returns all mediaInformation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mediaInformation`;
  }

  update(id: number, updateMediaInformationInput: UpdateMediaInformationInput) {
    return `This action updates a #${id} mediaInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediaInformation`;
  }
}
