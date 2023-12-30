import { HttpException, HttpStatus } from '@nestjs/common';

export class MediaAdditionalInfoNotFoundException extends HttpException {
  constructor() {
    super(
      {
        message: 'Invalid media additionalInfo specified',
        errorCode: 'MEDIA_ADDITIONAL_INFO_NOT_FOUND',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
