CREATE TABLE IF NOT EXISTS "casino"."game_sessions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"credits" integer DEFAULT 10 NOT NULL,
	"isDeleted" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "casino"."users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"credits" integer DEFAULT 0 NOT NULL
);
