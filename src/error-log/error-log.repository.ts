import { Repository } from '../base/repository.base';
import { ErrorLog } from './entities/error-log.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ErrorLogRepository extends Repository<ErrorLog> {}
