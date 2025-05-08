import appEnv from "./env/app.env";
import databaseEnv from "./env/database.env";

export default () => ({
  app: appEnv(),
  database: databaseEnv(),
});