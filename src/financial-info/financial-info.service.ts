import { Injectable } from '@nestjs/common';
import { CreateFinancialInfoInput } from './dto/create-financial-info.input';
import { UpdateFinancialInfoInput } from './dto/update-financial-info.input';

@Injectable()
export class FinancialInfoService {
  create(createFinancialInfoInput: CreateFinancialInfoInput) {
    return 'This action adds a new financialInfo';
  }

  findAll() {
    return `This action returns all financialInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financialInfo`;
  }

  update(id: number, updateFinancialInfoInput: UpdateFinancialInfoInput) {
    return `This action updates a #${id} financialInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialInfo`;
  }
}
