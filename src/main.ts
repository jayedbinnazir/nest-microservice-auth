import { NestFactory } from '@nestjs/core';
import { LoggerService } from './common/logger/logger.service';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT') || 3000;
  console.log(configService.get<string>('NODE_ENV'))
  console.log(configService.get<string>('DB_HOST'))

  await app.listen(port, () => {
    console.log(`Application is running on port ${port}`, 'NestApplication');
    
    // Log database connection status
    const dbHost = configService.get<string>('DB_HOST');
    const dbPort = configService.get<number>('DB_PORT');
    const dbName = configService.get<string>('DB_DATABASE');
    console.log("i ma loosersa ssasdsasdsads")
    console.log(
      `Connected to PostgreSQL at ${dbHost}:${dbPort}/${dbName}`,
      'TypeORM',
    );
  });
}

bootstrap().catch((err) => {
  console.error('Application failed to start', err);
  process.exit(1);
});