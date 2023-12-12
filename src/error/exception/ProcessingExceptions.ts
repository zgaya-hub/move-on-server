import { HttpException, HttpStatus } from '@nestjs/common';

export class ProcessingException extends HttpException {
  constructor(message = 'Error During Processing') {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
