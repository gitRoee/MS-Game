import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from "postgres";
import { ENV } from './env';

const { user, password, database, host } = ENV.db;

export const client = postgres({
    user,
    password,
    database,
    host,
    max: 1
});

export const db = drizzle(client);
