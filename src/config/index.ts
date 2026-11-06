import dotenv from "dotenv";

import path from "node:path";

dotenv.config({ path: path.join(process.cwd(), ".env") });



export default {
  app_url: process.env.APP_URL,
  port: process.env.PORT || 5000,
  database_url: process.env.DATABASE_URL,
  connection_string: process.env.CONNECTION_STRING
}


