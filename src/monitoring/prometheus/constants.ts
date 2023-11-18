import { HistogramConfiguration } from 'prom-client';

export const HISTOGRAM_PROVIDER: HistogramConfiguration<string> = {
  name: 'request_proccessing_time',
  help: 'this tells how much time is taken by request and response',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [1, 5, 10, 50, 100, 200, 400, 600, 800, 1000, 2000],
};
