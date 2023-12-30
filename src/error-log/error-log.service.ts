import { Injectable, Logger } from '@nestjs/common';
import { ErrorLogInputDto } from './dto/error-log.input';
import { ErrorLog } from './entities/error-log.entity';
import { Transactional } from 'typeorm-transactional';

@Injectable()
export class ErrorLogService {
  private readonly logger = new Logger(ErrorLogService.name);

  // Will open a transaction if one doesn't already exist
  async create(input: ErrorLogInputDto.CreateErrorLogInput): Promise<ErrorLog> {
    try {
      const errorLog = new ErrorLog();

      errorLog.statusCode = input.StatusCode;
      errorLog.message = input.Message;
      errorLog.type = input.Type;

      return errorLog;
    } catch (error) {
      this.logger.error(error);
    }
  }
}
