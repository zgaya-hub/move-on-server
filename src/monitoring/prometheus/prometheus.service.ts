import { Injectable, Logger } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Histogram } from 'prom-client';

@Injectable()
export class PrometheusService {
  private readonly logger = new Logger(PrometheusService.name);

  /*  private histogram: Histogram;

  constructor() {
    this.histogram = this.histogramProvider();
  }

  histogramProvider(): Histogram {
    return new Histogram({
      name: 'http_request_response_time',
      help: 'this tells how much time is taken by request and response',
      labelNames: ['method', 'route', 'status_code'],
      buckets: [1, 5, 10, 50, 100, 200, 400, 600, 800, 1000, 2000],
    });
  }

  recordHttpRequestResponseTime(method: string, route: string, statusCode: string, duration: number): void {
    const responseTimeInSeconds = duration / 1000;
    const httpRequestResponseTimeMetric = this.histogram.labels({ method, route, status_code: statusCode });

    httpRequestResponseTimeMetric.observe(responseTimeInSeconds);
  } */

  constructor(@InjectMetric('request_proccessing_time') private readonly histogram: Histogram<string>) {}

  recordRequestTime(method: string, route: string, statusCode: number, startTime: Date): void {
    const requestElapsedTime = this.calculateRequestElapsedTime(startTime);
    this.histogram
      .labels({
        method: method,
        route: route,
        status_code: statusCode,
      })
      .observe(requestElapsedTime);

    this.logger.log(`GraphQL Request Time: ${requestElapsedTime.toFixed(2)} ms`);
  }

  private calculateRequestElapsedTime(startTime: Date): number {
    const requestEndTime = new Date();
    const requestElapsedTime = requestEndTime.getTime() - startTime.getTime();
    return requestElapsedTime;
  }
}
