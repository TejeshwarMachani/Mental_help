import { v } from "convex/values";
import type { QueryCtx } from "./_generated/server";
import { mutation, query } from "./_generated/server";
import { getCurrentUser } from "./users";

/** Reject unauthenticated calls and return the user id. */
async function requireUserId(ctx: QueryCtx) {
  const user = await getCurrentUser(ctx);
  if (user === null) {
    throw new Error("UNAUTHENTICATED");
  }
  return user._id;
}

const todayKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

/* ------------------------------- Mood logs ------------------------------- */

export const getMoodLog = query({
  args: { date: v.string() },
  handler: async (ctx, { date }) => {
    const userId = await requireUserId(ctx);
    return await ctx.db
      .query("moodLogs")
      .withIndex("by_user_and_date", (q) => q.eq("userId", userId).eq("date", date))
      .first();
  },
});

export const listMoodLogs = query({
  args: { days: v.optional(v.number()) },
  handler: async (ctx, { days = 30 }) => {
    const userId = await requireUserId(ctx);
    const since = todayKey(new Date(Date.now() - days * 86_400_000));
    const all = await ctx.db
      .query("moodLogs")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    return all
      .filter((m) => m.date >= since)
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  },
});

export const upsertMoodLog = mutation({
  args: { date: v.string(), mood: v.number(), note: v.optional(v.string()) },
  handler: async (ctx, { date, mood, note }) => {
    const userId = await requireUserId(ctx);
    if (mood < 1 || mood > 5) throw new Error("INVALID_MOOD");
    const now = Date.now();
    const existing = await ctx.db
      .query("moodLogs")
      .withIndex("by_user_and_date", (q) => q.eq("userId", userId).eq("date", date))
      .first();
    if (existing) {
      await ctx.db.patch(existing._id, { mood, note, updatedAt: now });
      return existing._id;
    }
    return await ctx.db.insert("moodLogs", {
      userId,
      date,
      mood,
      note,
      createdAt: now,
      updatedAt: now,
    });
  },
});

/* ---------------------------- Journal entries ---------------------------- */

export const listJournalEntries = query({
  args: {},
  handler: async (ctx) => {
    const userId = await requireUserId(ctx);
    const all = await ctx.db
      .query("journalEntries")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    return all.sort((a, b) => b.createdAt - a.createdAt);
  },
});

export const createJournalEntry = mutation({
  args: { title: v.optional(v.string()), body: v.string(), moodAtEntry: v.optional(v.number()) },
  handler: async (ctx, { title, body, moodAtEntry }) => {
    const userId = await requireUserId(ctx);
    const trimmed = body.trim();
    if (!trimmed) throw new Error("EMPTY_BODY");
    if (trimmed.length > 20000) throw new Error("BODY_TOO_LONG");
    const now = Date.now();
    return await ctx.db.insert("journalEntries", {
      userId,
      title: title?.trim() || undefined,
      body: trimmed,
      moodAtEntry,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const deleteJournalEntry = mutation({
  args: { id: v.id("journalEntries") },
  handler: async (ctx, { id }) => {
    const userId = await requireUserId(ctx);
    const entry = await ctx.db.get(id);
    if (!entry || entry.userId !== userId) throw new Error("NOT_FOUND");
    await ctx.db.delete(id);
  },
});

/* ------------------------------ Assessments ------------------------------ */

export const listAssessments = query({
  args: { type: v.optional(v.union(v.literal("phq9"), v.literal("gad7"))) },
  handler: async (ctx, { type }) => {
    const userId = await requireUserId(ctx);
    const all = await ctx.db
      .query("assessments")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    return all
      .filter((a) => (type ? a.type === type : true))
      .sort((a, b) => b.createdAt - a.createdAt);
  },
});

export const saveAssessment = mutation({
  args: {
    type: v.union(v.literal("phq9"), v.literal("gad7")),
    answers: v.array(v.number()),
    score: v.number(),
    severity: v.string(),
    safetyFlag: v.boolean(),
  },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx);
    return await ctx.db.insert("assessments", { userId, ...args, createdAt: Date.now() });
  },
});

/* ------------------------------- Consents -------------------------------- */

export const getLatestConsent = query({
  args: {},
  handler: async (ctx) => {
    const userId = await requireUserId(ctx);
    const all = await ctx.db
      .query("consents")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    return all.sort((a, b) => b.acceptedAt - a.acceptedAt)[0] ?? null;
  },
});

export const recordConsent = mutation({
  args: { termsVersion: v.string(), privacyVersion: v.string() },
  handler: async (ctx, { termsVersion, privacyVersion }) => {
    const userId = await requireUserId(ctx);
    return await ctx.db.insert("consents", {
      userId,
      termsVersion,
      privacyVersion,
      acceptedAt: Date.now(),
    });
  },
});
