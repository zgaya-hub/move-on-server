import { HttpException, HttpStatus } from '@nestjs/common';

export class ErrorCodeException extends HttpException {
  constructor(message: string, errorCode: string, statusCode: HttpStatus) {
    super({ message, errorCode }, statusCode);
  }
}
