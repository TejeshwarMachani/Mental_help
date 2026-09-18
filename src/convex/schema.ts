import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables, // do not remove or modify

    // the users table is the default users table that is brought in by the authTables
    users: defineTable({
      name: v.optional(v.string()), // name of the user. do not remove
      image: v.optional(v.string()), // image of the user. do not remove
      email: v.optional(v.string()), // email of the user. do not remove
      emailVerificationTime: v.optional(v.number()), // email verification time. do not remove
      isAnonymous: v.optional(v.boolean()), // is the user anonymous. do not remove

      role: v.optional(roleValidator), // role of the user. do not remove
    }).index("email", ["email"]), // index for the email. do not remove or modify

    // add other tables here

    // Wellness: mood check-ins (one per day, upserted)
    moodLogs: defineTable({
      userId: v.id("users"),
      date: v.string(), // "YYYY-MM-DD" in user's local time
      mood: v.number(), // 1 (very low) – 5 (great)
      note: v.optional(v.string()),
      createdAt: v.number(),
      updatedAt: v.number(),
    })
      .index("by_user", ["userId"])
      .index("by_user_and_date", ["userId", "date"]),

    // Wellness: private journal entries
    journalEntries: defineTable({
      userId: v.id("users"),
      title: v.optional(v.string()),
      body: v.string(),
      moodAtEntry: v.optional(v.number()), // 1–5 snapshot when written
      createdAt: v.number(),
      updatedAt: v.number(),
    }).index("by_user", ["userId"]),

    // Wellness: saved screening results (PHQ-9 / GAD-7)
    assessments: defineTable({
      userId: v.id("users"),
      type: v.union(v.literal("phq9"), v.literal("gad7")),
      answers: v.array(v.number()), // 0–3 per question
      score: v.number(),
      severity: v.string(),
      safetyFlag: v.boolean(), // PHQ-9 item 9 > 0
      createdAt: v.number(),
    }).index("by_user", ["userId"]),

    // Compliance: record of Terms & Privacy acceptance (DPDP Act 2023)
    consents: defineTable({
      userId: v.id("users"),
      termsVersion: v.string(),
      privacyVersion: v.string(),
      acceptedAt: v.number(),
    }).index("by_user", ["userId"]),

    // tableName: defineTable({
    //   ...
    //   // table fields
    // }).index("by_field", ["field"])
  },
  {
    schemaValidation: false,
  },
);

export default schema;
