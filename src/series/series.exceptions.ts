import { HttpException, HttpStatus } from '@nestjs/common';

export class MediaImageAlreadyAssignedException extends HttpException {
  constructor() {
    super(
      {
        message: 'Media image already assigned to media',
        errorCode: 'MEDIA_IMAGE_ALREADY_ASSIGNED',
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}
