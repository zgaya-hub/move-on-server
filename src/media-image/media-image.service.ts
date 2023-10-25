import { Injectable } from '@nestjs/common';
import { CreateMediaImageInput } from './dto/create-media-image.input';
import { UpdateMediaImageInput } from './dto/update-media-image.input';

@Injectable()
export class MediaImageService {
  create(createMediaImageInput: CreateMediaImageInput) {
    return 'This action adds a new mediaImage';
  }

  findAll() {
    return `This action returns all mediaImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mediaImage`;
  }

  update(id: number, updateMediaImageInput: UpdateMediaImageInput) {
    return `This action updates a #${id} mediaImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediaImage`;
  }
}
