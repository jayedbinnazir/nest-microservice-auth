import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoggerService implements NestLoggerService {
  private readonly logger = new console.Console(process.stdout, process.stderr);

  constructor(private readonly configService: ConfigService) {}

  log(message: string, context?: string) {
    this.logger.log(`[INFO] ${this.getTimestamp()} [${context}] ${message}`);
  }

  error(message: string, trace: string, context?: string) {
    this.logger.error(`[ERROR] ${this.getTimestamp()} [${context}] ${message}`, trace);
  }

  warn(message: string, context?: string) {
    this.logger.warn(`[WARN] ${this.getTimestamp()} [${context}] ${message}`);
  }

  debug(message: string, context?: string) {
    if (this.configService.get('NODE_ENV') !== 'production') {
      this.logger.debug(`[DEBUG] ${this.getTimestamp()} [${context}] ${message}`);
    }
  }

  verbose(message: string, context?: string) {
    if (this.configService.get('NODE_ENV') !== 'production') {
      this.logger.log(`[VERBOSE] ${this.getTimestamp()} [${context}] ${message}`);
    }
  }

  private getTimestamp(): string {
    return new Date().toISOString();
  }
}