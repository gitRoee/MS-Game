import { sql } from "drizzle-orm";
import { boolean, integer, pgSchema, text, uuid } from "drizzle-orm/pg-core";

const schema = pgSchema("casino");

export const gameSessions = schema.table('game_sessions', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  credits: integer('credits').notNull().default(10),
  isDeleted: boolean('isDeleted').default(false)
});

export const users = schema.table('users', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  credits: integer('credits').notNull().default(0)
});
