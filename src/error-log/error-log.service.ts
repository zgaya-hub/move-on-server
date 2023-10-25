import { Injectable, Logger } from '@nestjs/common';
import { ErrorLogInputDto } from './dto/error-log.input';
import { ErrorLog } from './entities/error-log.entity';
import { Transactional } from 'typeorm-transactional';

@Injectable()
export class ErrorLogService {
  private readonly logger = new Logger(ErrorLogService.name);

  @Transactional() // Will open a transaction if one doesn't already exist
  async create(input: ErrorLogInputDto.CreateErrorLogInput): Promise<ErrorLog> {
    try {
      const errorLog = new ErrorLog();

      errorLog.statusCode = input.statusCode;
      errorLog.message = input.message;
      errorLog.type = input.type;

      return errorLog;
    } catch (error) {
      this.logger.error(error);
    }
  }
}
