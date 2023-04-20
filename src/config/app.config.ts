import { z } from 'zod';

const appConfigSchema = z.object({
  PORT: z.number(),
  DB_HOST: z.string(),
  DB_PASSWORD: z.string(),
  DATABASE: z.string(),
  DB_USER: z.string(),
  DB_PORT: z.number(),
});

export const APP_CONFIG: z.infer<typeof appConfigSchema> = {
  PORT: (process.env.PORT && +process.env.PORT) || 3000,
  DATABASE: process.env.DATABASE!,
  DB_HOST: process.env.DB_HOST!,
  DB_PASSWORD: process.env.DB_PASSWORD!,
  DB_USER: process.env.DB_USER!,
  DB_PORT: (process.env.DB_PORT && +process.env.DB_PORT) || 5432,
};

appConfigSchema.parse(APP_CONFIG);
