import { Module } from '@nestjs/common';
import { MonitorService } from './monitor.service';
// import { StatusMonitorModule } from 'nest-status-monitor';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { StatusMonitorConfig } from './config/status-monitor.config';
import { MonitorController } from './monitor.controller';

@Module({
  imports: [
    // StatusMonitorModule.setUp(StatusMonitorConfig),
    // PrometheusModule.register({
    //   path: 'http://localhost:8080/metrics',
    // }),
  ],
  providers: [MonitorController, MonitorService],
})
export class MonitorModule {}
