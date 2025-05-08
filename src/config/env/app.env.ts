import { AppEnv } from '../interfaces/app.env.interface';
import * as path from 'path';
import * as dotenv from 'dotenv';



export default (): AppEnv => {
  const env = process.env.NODE_ENV || 'dev';
  

  const envPath = path.resolve(__dirname, `../../../.env.${env}`);
  console.log(`Loading environment variables from:---------> ${envPath}`);
  // Load the appropriate .env file
  dotenv.config({ path: envPath });

  return {
    NODE_ENV: env,
    PORT: parseInt(process.env.PORT as string, 10) || 3000,
    // Add other app-specific environment variables here
  };
};