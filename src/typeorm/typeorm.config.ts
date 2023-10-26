import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const ormConfig: DataSourceOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'wordpress',
  entities: ['dist/**/entities/*.entity.js'],
  migrations: [`dist/**/${process.env.MR}/*.js`],
};
console.log(ormConfig);

const datasource = new DataSource({ ...ormConfig });

export default datasource;
