import { DatabaseEnv } from '../interfaces/database.env.interface';
import * as path from 'path';
import * as dotenv from 'dotenv';

export default (): DatabaseEnv => {
  const env = process.env.NODE_ENV || 'dev';
  
  

  const envPath = path.resolve(__dirname, `../../../.env.${env}`);
  console.log(`Loading environment variables from:---------> ${envPath}`);
   // Load the appropriate .env file
   dotenv.config({ path: envPath });


  return {
    DB_HOST: process.env.DB_HOST as string,
    DB_PORT: parseInt(process.env.DB_PORT as string, 10) || 5432,
    DB_USERNAME: process.env.DB_USERNAME as string,
    DB_PASSWORD: process.env.DB_PASSWORD as string,
    DB_DATABASE: process.env.DB_DATABASE as string,
    DB_SYNCHRONIZE: process.env.DB_SYNCHRONIZE === 'true',
    DB_LOGGING: process.env.DB_LOGGING === 'true',
    // Add other database-specific environment variables here
  };
};