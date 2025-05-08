export interface DatabaseEnv {
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    DB_SYNCHRONIZE: boolean;
    DB_LOGGING: boolean;
    // Add other database-specific environment variables here
  }