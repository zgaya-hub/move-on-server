import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidCredentialsException extends HttpException {
  constructor() {
    super(
      {
        message: 'Invalid credentials',
        errorCode: 'INVALID_CREDENTIALS',
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}

export class EmailAlreadyExistsException extends HttpException {
  constructor() {
    super(
      {
        message: 'Email address is already registered',
        errorCode: 'EMAIL_ALREADY_EXISTS',
      },
      HttpStatus.CONFLICT,
    );
  }
}
