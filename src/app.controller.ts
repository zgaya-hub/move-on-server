import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import Prometheus from 'prom-client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/metrics')
  metrics() {
    const collectDefaultMetrics = Prometheus.collectDefaultMetrics;
    collectDefaultMetrics({ register: Prometheus.register });
    const metrics = Prometheus.register.metrics();
    return metrics;
  }
}
