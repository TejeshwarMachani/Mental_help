import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { useCallback } from "react";

const LOCAL_KEY = "mh_current_user_id";

/**
 * Bridges the auth user id into this browser so Convex mutations can scope
 * records. Convex Auth's anonymous/email-OTP user ids are stable per account.
 */
export function useWellness() {
  const moodToday = useQuery(api.wellness.getMoodLog, { date: localDateKey() });
  const moodHistory = useQuery(api.wellness.listMoodLogs, { days: 60 });
  const journal = useQuery(api.wellness.listJournalEntries, {});
  const assessments = useQuery(api.wellness.listAssessments, {});
  const consent = useQuery(api.wellness.getLatestConsent, {});

  const upsertMood = useMutation(api.wellness.upsertMoodLog);
  const createJournal = useMutation(api.wellness.createJournalEntry);
  const deleteJournal = useMutation(api.wellness.deleteJournalEntry);
  const saveAssessment = useMutation(api.wellness.saveAssessment);
  const recordConsent = useMutation(api.wellness.recordConsent);

  const saveMood = useCallback(
    async (mood: number, note?: string) =>
      upsertMood({ date: localDateKey(), mood, note }),
    [upsertMood],
  );

  return {
    moodToday: moodToday ?? null,
    moodHistory: moodHistory ?? [],
    journal: journal ?? [],
    assessments: assessments ?? [],
    consent: consent ?? null,
    saveMood,
    createJournal,
    deleteJournal,
    saveAssessment,
    recordConsent,
  };
}

export function localDateKey(d = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export type JournalId = Id<"journalEntries">;
