import { Injectable } from '@nestjs/common';
import { CreateExternalLinkInput } from './dto/create-external-link.input';
import { UpdateExternalLinkInput } from './dto/update-external-link.input';

@Injectable()
export class ExternalLinkService {
  create(createExternalLinkInput: CreateExternalLinkInput) {
    return 'This action adds a new externalLink';
  }

  findAll() {
    return `This action returns all externalLink`;
  }

  findOne(id: number) {
    return `This action returns a #${id} externalLink`;
  }

  update(id: number, updateExternalLinkInput: UpdateExternalLinkInput) {
    return `This action updates a #${id} externalLink`;
  }

  remove(id: number) {
    return `This action removes a #${id} externalLink`;
  }
}
