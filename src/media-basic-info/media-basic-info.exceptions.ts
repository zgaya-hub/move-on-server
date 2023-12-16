import { HttpException, HttpStatus } from '@nestjs/common';

export class MediaBasicInfoNotFoundException extends HttpException {
  constructor() {
    super(
      {
        message: 'Invalid media basicInfo specified',
        errorCode: 'MEDIA_BASIC_INFO_NOT_FOUND',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
