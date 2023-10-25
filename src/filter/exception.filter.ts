import { ExceptionFilter as NestExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class ExceptionFilter implements NestExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const response = exception instanceof HttpException ? exception.getResponse() : { message: 'Unknown error' };

    const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    try {
      const responseBody = {
        statusCode: httpStatus,
        message: (response as any).message,
        timestamp: new Date().toISOString(),
      };
      httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    } catch (error) {
      console.log('error', error);
    }
  }
}
