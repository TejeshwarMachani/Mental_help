export type Helpline = {
  id: string;
  name: string;
  region: string;
  contact: string;
  tel?: string;
  sms?: string;
  chat?: string;
  hours: string;
  note: string;
};

export const primaryHelplines: Helpline[] = [
  {
    id: "988",
    name: "988 Suicide & Crisis Lifeline",
    region: "United States",
    contact: "Call or text 988",
    tel: "988",
    chat: "https://chat.988lifeline.org",
    hours: "24/7 · Free · Confidential",
    note: "For anyone in emotional distress or suicidal crisis — you don't have to be suicidal to call. Press 1 for the Veterans Crisis Line, press 2 for Spanish, or press 3 for LGBTQI+ youth support.",
  },
  {
    id: "ctl",
    name: "Crisis Text Line",
    region: "United States",
    contact: "Text HOME to 741741",
    sms: "741741",
    chat: "https://www.crisistextline.org",
    hours: "24/7 · Free",
    note: "Text with a trained crisis counselor when talking out loud feels like too much. Available on WhatsApp and via web chat as well.",
  },
  {
    id: "emergency",
    name: "Emergency services",
    region: "United States",
    contact: "Call 911",
    tel: "911",
    hours: "24/7",
    note: "If someone is in immediate danger, has seriously injured themselves, or a life is at risk right now, call emergency services or go to the nearest emergency room.",
  },
  {
    id: "samhsa",
    name: "SAMHSA National Helpline",
    region: "United States",
    contact: "1-800-662-4357 (HELP)",
    tel: "18006624357",
    hours: "24/7 · 365 days a year",
    note: "Free, confidential treatment referral and information in English and Spanish for mental health and substance use — for individuals and families.",
  },
];

export const internationalHelplines: Helpline[] = [
  {
    id: "fah",
    name: "Find A Helpline",
    region: "160+ countries",
    contact: "findahelpline.com",
    chat: "https://findahelpline.com",
    hours: "Directory of verified local services",
    note: "The fastest way to find a free, confidential helpline near you — phone, text and chat services vetted by the global suicide-prevention community.",
  },
  {
    id: "iasp",
    name: "IASP crisis centres",
    region: "Worldwide",
    contact: "iasp.info/suicidalthoughts",
    chat: "https://www.iasp.info/suicidalthoughts/",
    hours: "Official directory",
    note: "The International Association for Suicide Prevention lists certified crisis centres by country, plus immediate guidance for a suicidal crisis.",
  },
  {
    id: "befrienders",
    name: "Befrienders Worldwide",
    region: "30+ countries",
    contact: "befrienders.org",
    chat: "https://www.befrienders.org",
    hours: "Directory of member centres",
    note: "A network of emotional-support centres offering non-judgmental listening, often staffed by trained volunteers, across Europe, Asia, Africa and the Americas.",
  },
  {
    id: "vcl",
    name: "Veterans Crisis Line",
    region: "United States",
    contact: "Dial 988, then press 1",
    tel: "988",
    sms: "838255",
    chat: "https://www.veteranscrisisline.net",
    hours: "24/7 · You don't need to be enrolled in VA care",
    note: "Confidential support for veterans, service members, National Guard and Reserve, and their families. Text 838255 or chat online.",
  },
];

export const warningSigns: { title: string; body: string }[] = [
  {
    title: "Talking about wanting to die or end one's life",
    body: "Any statement — even one said half-jokingly — about suicide, being a burden, or not wanting to be here deserves to be taken seriously.",
  },
  {
    title: "Looking for ways to end one's life",
    body: "Searching for methods, acquiring pills, weapons or other means, or giving away treasured belongings are urgent warning signs.",
  },
  {
    title: "Saying goodbye, or withdrawal",
    body: "Reaching out to people as if to say goodbye, withdrawing from family and friends, or suddenly becoming isolated after being connected.",
  },
  {
    title: "Loss of interest, mood swings, despair",
    body: "No interest in things once enjoyed, dramatic shifts in mood or behaviour, and talk or feelings of hopelessness, rage or unbearable pain.",
  },
  {
    title: "Changes in sleep, appetite and daily function",
    body: "Sleeping far more or far less, neglecting meals or self-care, slipping performance at work or school, rising alcohol or drug use.",
  },
  {
    title: "Sudden calm after a deep depression",
    body: "An abrupt, unexplained sense of peace can mean a decision has been made. If it follows a period of crisis, reach out immediately.",
  },
];

export const techniques: {
  id: string;
  title: string;
  for: string;
  steps: string[];
  time: string;
  source: { label: string; href: string };
}[] = [
  {
    id: "breathe",
    title: "Slow breathing (5 in · 5 out)",
    for: "Anxiety, panic, acute stress",
    time: "5 minutes",
    steps: [
      "Sit with your back supported and both feet flat on the floor, or lie down.",
      "Breathe in gently through your nose, counting steadily to 5.",
      "Breathe out through your mouth, counting steadily to 5 again.",
      "Repeat for at least 5 minutes — you may not reach 5 at first, and that's fine.",
    ],
    source: {
      label: "NHS — Breathing exercises for stress",
      href: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/",
    },
  },
  {
    id: "grounding",
    title: "Grounding through the senses",
    for: "Dissociation, spiralling thoughts, overwhelm",
    time: "2–3 minutes",
    steps: [
      "Notice 5 things you can see around you — name them silently.",
      "Notice 4 things you can physically feel — chair, floor, fabric, air.",
      "Notice 3 things you can hear, near or far.",
      "Notice 2 things you can smell and 1 you can taste, then take one slow breath.",
    ],
    source: {
      label: "VA — Coping with traumatic stress reactions",
      href: "https://www.ptsd.va.gov/gethelp/coping_stress_reactions.asp",
    },
  },
  {
    id: "move",
    title: "A short, regular walk",
    for: "Depression, low mood, rumination",
    time: "10–30 minutes",
    steps: [
      "Aim for roughly 30 minutes of walking most days — even 10 helps.",
      "Gentle, regular activity is enough; there is no need to push hard.",
      "Keep it repeatable: same time, same simple route, nothing to decide.",
    ],
    source: {
      label: "NIMH — Depression basics",
      href: "https://www.nimh.nih.gov/health/topics/depression",
    },
  },
  {
    id: "sleep",
    title: "Protecting sleep",
    for: "Insomnia, depression, PTSD",
    time: "Ongoing habit",
    steps: [
      "Keep the same sleep and wake times every day, including weekends.",
      "Get bright light in the morning and keep the bedroom dark and cool at night.",
      "Avoid screens, alcohol and heavy meals close to bedtime.",
      "Get out of bed if you can't sleep after about 20 minutes; return when sleepy.",
    ],
    source: {
      label: "NIMH — Depression basics",
      href: "https://www.nimh.nih.gov/health/topics/depression",
    },
  },
  {
    id: "safety-plan",
    title: "A personal safety plan",
    for: "Recurring suicidal thoughts",
    time: "One session with a clinician",
    steps: [
      "List your personal warning signs that a crisis may be developing.",
      "List coping strategies you can use on your own, then people and places that provide distraction.",
      "Write down the people you can ask for help and professionals or agencies to contact.",
      "Agree on how to make your environment safer, and list the reasons for living that matter to you.",
    ],
    source: {
      label: "Stanley-Brown Safety Planning Intervention",
      href: "https://suicidesafetyplan.com",
    },
  },
  {
    id: "therapy",
    title: "Talk therapy and treatment",
    for: "Depression, anxiety, PTSD, sustained distress",
    time: "A course of sessions",
    steps: [
      "Psychotherapy helps people identify and change troubling emotions, thoughts and behaviours.",
      "CBT and similar approaches have strong evidence for depression and anxiety.",
      "If cost is a barrier, start with a helpline above — they can point you to free or sliding-scale services.",
    ],
    source: {
      label: "NIMH — Psychotherapies",
      href: "https://www.nimh.nih.gov/health/topics/psychotherapies",
    },
  },
];

export const expectations: { title: string; body: string }[] = [
  {
    title: "You will not be judged or reported",
    body: "Helplines are confidential and free. You can stay anonymous, share as much or as little as you want, and end the call or chat whenever you like.",
  },
  {
    title: "You don't have to be suicidal",
    body: "Lines exist for any emotional pain — anxiety, loneliness, grief, self-harm thoughts, or simply a bad night. If it matters to you, it matters to them.",
  },
  {
    title: "A trained human answers",
    body: "You'll reach a trained counselor or volunteer who listens without judgment. They won't pressure you — many callers just need someone to hear them.",
  },
  {
    title: "There is no script and no wrong way",
    body: "Crying, silence, anger, short sentences — all of it is fine. If the first conversation doesn't fit, you can call a different line or try again another time.",
  },
];

export const sources: { label: string; href: string }[] = [
  { label: "988 Suicide & Crisis Lifeline", href: "https://988lifeline.org" },
  {
    label: "Crisis Text Line",
    href: "https://www.crisistextline.org",
  },
  {
    label: "SAMHSA National Helpline",
    href: "https://www.samhsa.gov/find-help/helplines/national-helpline",
  },
  {
    label: "Veterans Crisis Line",
    href: "https://www.veteranscrisisline.net",
  },
  { label: "Find A Helpline (global)", href: "https://findahelpline.com" },
  {
    label: "IASP — Suicidal crisis support",
    href: "https://www.iasp.info/suicidalthoughts/",
  },
  { label: "Befrienders Worldwide", href: "https://www.befrienders.org" },
  {
    label: "AFSP — Risk factors & warning signs",
    href: "https://afsp.org/risk-factors-protective-factors-and-warning-signs/",
  },
  { label: "988 Lifeline — Learn", href: "https://988lifeline.org/learn/" },
  {
    label: "NIMH — Depression",
    href: "https://www.nimh.nih.gov/health/topics/depression",
  },
  {
    label: "NIMH — Psychotherapies",
    href: "https://www.nimh.nih.gov/health/topics/psychotherapies",
  },
  {
    label: "NHS — Breathing exercises",
    href: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/",
  },
  {
    label: "VA — Coping with traumatic stress",
    href: "https://www.ptsd.va.gov/gethelp/coping_stress_reactions.asp",
  },
  {
    label: "Stanley-Brown Safety Planning Intervention",
    href: "https://suicidesafetyplan.com",
  },
];
