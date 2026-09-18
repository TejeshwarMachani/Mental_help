export type ScreeningDef = {
  type: "phq9" | "gad7";
  name: string;
  full: string;
  about: string;
  source: { label: string; href: string };
  options: { value: number; label: string }[];
  questions: string[];
  /** Score bands: up to `max` inclusive → label. Last band is open-ended. */
  bands: { upTo: number; label: string; advice: string }[];
  /** Index of the safety-critical question (PHQ-9 item 9). */
  safetyQuestionIndex?: number;
};

export const PHQ9: ScreeningDef = {
  type: "phq9",
  name: "Depression check",
  full: "PHQ-9 — Patient Health Questionnaire",
  about:
    "Nine questions about how often you have been bothered by problems over the last two weeks. This is a screening tool, not a diagnosis — only a clinician can diagnose.",
  source: {
    label: "Pfizer / APA — PHQ-9 (public domain)",
    href: "https://www.phqscreeners.com/",
  },
  options: [
    { value: 0, label: "Not at all" },
    { value: 1, label: "Several days" },
    { value: 2, label: "More than half the days" },
    { value: 3, label: "Nearly every day" },
  ],
  questions: [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
    "Trouble concentrating on things, such as reading or watching television",
    "Moving or speaking so slowly that other people could have noticed — or being so fidgety or restless that you have been moving a lot more than usual",
    "Thoughts that you would be better off dead, or of hurting yourself in some way",
  ],
  bands: [
    {
      upTo: 4,
      label: "Minimal",
      advice: "Your responses suggest minimal depression symptoms. Keep using the tracker and check in with yourself now and then.",
    },
    {
      upTo: 9,
      label: "Mild",
      advice: "Mild symptoms. Consider the guided exercises here, and if this persists beyond two weeks, talk to a counsellor — Tele-MANAS 14416 is free.",
    },
    {
      upTo: 14,
      label: "Moderate",
      advice: "Moderate symptoms. Professional support is recommended. Call Tele-MANAS 14416 for free counselling and a referral near you.",
    },
    {
      upTo: 19,
      label: "Moderately severe",
      advice: "Moderately severe symptoms. Please reach out for professional care. Tele-MANAS 14416 can connect you to free district services.",
    },
    {
      upTo: 27,
      label: "Severe",
      advice: "Severe symptoms. Please seek help today — call Tele-MANAS 14416 or KIRAN 1800-599-0019. If you feel unsafe, call 112.",
    },
  ],
  safetyQuestionIndex: 8,
};

export const GAD7: ScreeningDef = {
  type: "gad7",
  name: "Anxiety check",
  full: "GAD-7 — Generalised Anxiety Disorder scale",
  about:
    "Seven questions about how often you have been bothered by anxiety over the last two weeks. A screening tool, not a diagnosis.",
  source: {
    label: "Pfizer / APA — GAD-7 (public domain)",
    href: "https://www.phqscreeners.com/",
  },
  options: [
    { value: 0, label: "Not at all" },
    { value: 1, label: "Several days" },
    { value: 2, label: "More than half the days" },
    { value: 3, label: "Nearly every day" },
  ],
  questions: [
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless that it is hard to sit still",
    "Becoming easily annoyed or irritable",
    "Feeling afraid, as if something awful might happen",
  ],
  bands: [
    {
      upTo: 4,
      label: "Minimal",
      advice: "Your responses suggest minimal anxiety symptoms. Keep an eye on things with the mood tracker.",
    },
    {
      upTo: 9,
      label: "Mild",
      advice: "Mild anxiety. The breathing and grounding exercises in Guided exercises can help — try one today.",
    },
    {
      upTo: 14,
      label: "Moderate",
      advice: "Moderate anxiety. Screening-positive at this level usually warrants a professional conversation. Tele-MANAS 14416 is free.",
    },
    {
      upTo: 21,
      label: "Severe",
      advice: "Severe anxiety. Please seek professional care — start with Tele-MANAS 14416 or KIRAN 1800-599-0019.",
    },
  ],
};

export const screenings: ScreeningDef[] = [PHQ9, GAD7];

export function severityFor(def: ScreeningDef, score: number) {
  return def.bands.find((b) => score <= b.upTo) ?? def.bands[def.bands.length - 1];
}
