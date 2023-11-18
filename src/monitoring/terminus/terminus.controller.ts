import { Controller, Get } from '@nestjs/common';
import { TerminusService } from './terminus.service';
import { DiskHealthIndicator, HealthCheck, HealthCheckService, HttpHealthIndicator, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Controller('terminus')
export class TerminusController {
  constructor(
    private readonly terminusService: TerminusService,
    private healthCheckService: HealthCheckService,
    private httpHealthIndicator: HttpHealthIndicator,
    private typeOrmHealthIndicator: TypeOrmHealthIndicator,
    private readonly diskHealthIndicator: DiskHealthIndicator,
  ) {}

  @Get('health')
  @HealthCheck()
  checkHealth() {
    return this.healthCheckService.check([() => this.httpHealthIndicator.pingCheck('nestjs-docs', 'https://docs.nestjs.com')]);
  }

  @Get('database')
  @HealthCheck()
  checkDatabase() {
    return this.healthCheckService.check([() => this.typeOrmHealthIndicator.pingCheck('database')]);
  }

  @Get('/disk')
  @HealthCheck()
  check() {
    return this.healthCheckService.check([() => this.diskHealthIndicator.checkStorage('storage', { path: '/', threshold: 500 * 1024 * 1024 * 1024 })]);
  }
}
