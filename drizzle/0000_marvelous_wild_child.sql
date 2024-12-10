CREATE TABLE IF NOT EXISTS "user_messages" (
	"user_id" text PRIMARY KEY NOT NULL,
	"message" text NOT NULL,
	"created_ts" timestamp DEFAULT now() NOT NULL
);
