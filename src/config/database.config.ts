import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { DatabaseEnv } from './interfaces/database.env.interface';

export const  typeOrmConfig = (
  configService: ConfigService<DatabaseEnv>,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('DB_HOST') || 'localhost',
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: configService.get('DB_SYNCHRONIZE'),
  logging: configService.get('DB_LOGGING'),
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  migrationsRun: true,
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  // Removed the cli property as it is not recognized in TypeOrmModuleOptions
});