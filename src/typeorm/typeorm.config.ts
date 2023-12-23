import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const ormConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'mysql-21d83b93-mr-6197.a.aivencloud.com',
  port: 10953,
  username: 'avnadmin',
  password: 'AVNS_DLKPJaXiAzDKdvV7Pen',
  database: 'move-on',
  entities: ['dist/**/entities/*.entity.js'],
  migrations: [`dist/**/${process.env.MR}/*.js`],
};
console.log(ormConfig);

const datasource = new DataSource({ ...ormConfig });

export default datasource;
