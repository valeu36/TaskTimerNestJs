import { registerAs } from '@nestjs/config';

export default  registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  logging: process.env.TYPEORM_LOGGING === 'true',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
}));
