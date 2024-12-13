import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const userMessages = pgTable("user_messages", {
    user_id: text("user_id").primaryKey().notNull(),
    message: text("message").notNull(),
    created_at: timestamp("created_ts").defaultNow().notNull(),
});


