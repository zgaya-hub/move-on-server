import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable, tap } from 'rxjs';
import { PrometheusService } from '../prometheus.service';

@Injectable()
export class TimeDetectorInterceptor implements NestInterceptor {
  private readonly logger = new Logger(TimeDetectorInterceptor.name);

  constructor(private readonly prometheusService: PrometheusService) {}

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const requestStartTime = new Date();
    const gqlContext = GqlExecutionContext.create(context);
    const info = gqlContext.getInfo();
    const isHttp = context.getType() === 'http';

    if (isHttp) {
      this.logger.log(`Feature not Supported`);
      return next.handle();
    }

    return next.handle().pipe(
      tap(() => {
        const method = 'GraphQL';
        const route = info.fieldName;
        const response = context.switchToHttp().getResponse();
        const statusCode = response.statusCode;

        try {
          this.prometheusService.recordRequestTime(method, route, statusCode, requestStartTime);
        } catch (error) {
          this.logger.error(error);
        }
      }),
    );
  }
}
