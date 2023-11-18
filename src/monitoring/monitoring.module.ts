import { Module } from '@nestjs/common';
import { MonitoringService } from './monitoring.service';
import { MonitoringController } from './monitoring.controller';
import { TerminusModule } from './terminus/terminus.module';
import { PrometheusModule } from './prometheus/prometheus.module';

@Module({
  imports: [PrometheusModule, TerminusModule],
  controllers: [MonitoringController],
  providers: [MonitoringService],
})
export class MonitoringModule {}
