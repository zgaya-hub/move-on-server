import { Module } from '@nestjs/common';
import { PrometheusService } from './prometheus.service';
import { PrometheusController } from './prometheus.controller';
import { PrometheusModule as NestPrometheusModule, makeHistogramProvider } from '@willsoto/nestjs-prometheus';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TimeDetectorInterceptor } from './time-detector/time-detector.interceptor';
import { HISTOGRAM_PROVIDER } from './constants';

@Module({
  imports: [NestPrometheusModule.register()],
  controllers: [PrometheusController],
  providers: [
    makeHistogramProvider(HISTOGRAM_PROVIDER),
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeDetectorInterceptor,
    },
    PrometheusService,
  ],
  exports: [],
})
export class PrometheusModule {}
