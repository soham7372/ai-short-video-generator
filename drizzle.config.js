//import '/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  //out: './drizzle',
  schema: './configs/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://AI-VIDEO-GENERATOR_owner:RMDxyiXc47mt@ep-polished-frost-a5zf3l61.us-east-2.aws.neon.tech/ai-video-generator-database?sslmode=require",
  },
});
