import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const ormConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'wordpress',
  entities: ['dist/**/entities/*.entity.js'],
  migrations: [`dist/**/${process.env.MR}/*.js`],
};

const datasource = new DataSource({ ...ormConfig });

export default datasource;
