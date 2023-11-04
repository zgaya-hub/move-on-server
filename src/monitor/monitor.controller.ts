import { Controller, Get } from '@nestjs/common';
import Prometheus from 'prom-client';

@Controller('monitor')
export class MonitorController {
  // @Get('/metrics')
  // metrics() {
  //   const collectDefaultMetrics = Prometheus.collectDefaultMetrics;
  //   collectDefaultMetrics({ register: Prometheus.register });
  //   const metrics = Prometheus.register.metrics();
  //   return metrics;
  // }
}
