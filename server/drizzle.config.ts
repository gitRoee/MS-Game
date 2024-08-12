import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/schemas/casino.ts',
  out: './src/drizzle',
  dialect: "postgresql",
});