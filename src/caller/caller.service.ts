import { Injectable } from '@nestjs/common';
import { ErrorLogInputDto } from '../error-log/dto/error-log.input';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class CallerService {
  private readonly appHost: string;
  constructor(configService: ConfigService) {
    this.appHost = configService.get<string>('SERVER_HOST');
  }

  async createErrorLog(input: ErrorLogInputDto.CreateErrorLogInput) {
    const query = `mutation{
      createErrorLog(CreateErrorLogInput: {message: "${input.message}", statusCode: ${input.statusCode}, type: "${input.type}"}){
        message
      }
    }`;

    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios({
      url: this.appHost,
      data: { query },
      method: 'post',
    });

    console.log(response);
  }
}
