import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch(HttpException)
export class ExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, _: ArgumentsHost) {
    if (exception.getStatus() === 400) {
      throw exception.getResponse();
    }

    return exception;
  }
}
