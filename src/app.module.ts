import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import database from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot( {load: [database], isGlobal: true } ),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    TaskModule,
  ],
})
export class AppModule {}
