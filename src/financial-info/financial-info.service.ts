import { Injectable } from '@nestjs/common';
import { FinancialInfoInputDto } from './dto/financial-info.input.dto';
import { EntitySaveService } from '../adapter/save.service';
import { FinancialInfo } from './entities/financial-info.entity';
import { MovierMediaType } from '../common/types/Common.type';
import { Movie } from '../movie/entities/movie.entity';
import { Series } from '../series/entities/series.entity';

@Injectable()
export class FinancialInfoService {
  constructor(private readonly entitySaveService: EntitySaveService) {}

  async createFinancialInfo(input: FinancialInfoInputDto.CreateFinancialInfoInput, media: MovierMediaType, entitySaveService: EntitySaveService): Promise<FinancialInfo> {
    try {
      const financialInfo = new FinancialInfo();

      financialInfo.budget = input.Budget;
      financialInfo.netProfit = input.NetProfit;
      financialInfo.revenue = input.Revenue;

      if (media instanceof Movie) financialInfo.movie = media;
      if (media instanceof Series) financialInfo.series = media;

      if (entitySaveService) {
        entitySaveService.push(financialInfo);
      } else {
        await this.entitySaveService.save<FinancialInfo>(financialInfo);
      }

      return financialInfo;
    } catch (error) {
      throw new Error(error);
    }
  }
}
