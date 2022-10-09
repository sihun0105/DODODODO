import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

import { Users } from './src/entities/Users';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [Users],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
