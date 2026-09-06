export type Helpline = {
  id: string;
  name: string;
  region: string;
  contact: string;
  tel?: string;
  whatsapp?: string;
  chat?: string;
  hours: string;
  note: string;
};

/** National services — all India, first things people should try. */
export const primaryHelplines: Helpline[] = [
  {
    id: "telemanas",
    name: "Tele-MANAS",
    region: "Government of India",
    contact: "14416 or 1800-891-4416",
    tel: "14416",
    chat: "https://telemanas.mohfw.gov.in/",
    hours: "24×7 · Toll-free · 20+ languages",
    note: "The national mental-health helpline run by the Ministry of Health & Family Welfare. Trained counsellors take every call, and can connect you to mental-health specialists and District Mental Health Programme services near you.",
  },
  {
    id: "vandrevala",
    name: "Vandrevala Foundation",
    region: "All India · WhatsApp",
    contact: "+91 9999 666 555",
    tel: "+919999666555",
    whatsapp: "https://wa.me/919999666555",
    chat: "https://www.vandrevalafoundation.com/free-counseling",
    hours: "24×7 · 365 days · Free",
    note: "A free crisis-intervention helpline for depression, anxiety and suicidal thoughts. Call or message on WhatsApp — counselling is offered in eleven Indian languages, with appointments with psychologists available too.",
  },
  {
    id: "aasra",
    name: "AASRA",
    region: "Navi Mumbai · All India",
    contact: "+91 22 2754 6669",
    tel: "+912227546669",
    chat: "https://aasra.info/",
    hours: "24×7 · English & Hindi",
    note: "One of India's longest-running suicide-prevention helplines, answered around the clock by trained volunteers. Non-judgmental, confidential and anonymous — calls are never recorded or shared. Also supports families bereaved by suicide.",
  },
  {
    id: "icall",
    name: "iCALL — TISS",
    region: "Tata Institute of Social Sciences",
    contact: "+91 91529 87821",
    tel: "+919152987821",
    chat: "https://icallhelpline.org/",
    hours: "Mon–Sat · 8 am – 9 pm · Email support too",
    note: "A psychosocial helpline run by TISS with professional counsellors. Phone and email-based counselling — write to icall@tiss.edu and they respond within 24 hours.",
  },
];

/** NGO crisis centres across Indian cities, with their real hours. */
export const regionalHelplines: Helpline[] = [
  {
    id: "sneha",
    name: "SNEHA",
    region: "Chennai",
    contact: "+91 44 2464 0050",
    tel: "+914424640050",
    chat: "https://snehaindia.org",
    hours: "24×7 · Every day",
    note: "SNEHA (Sneha Foundation India) has offered face-to-face and telephone support for people feeling suicidal in Chennai for decades, in Tamil and English.",
  },
  {
    id: "sumaitri",
    name: "SUMAITRI",
    region: "New Delhi",
    contact: "+91 11 2338 9090",
    tel: "+911123389090",
    chat: "https://sumaitri.net",
    hours: "Daily · 12:30 – 5:00 pm · Also +91 9315 767 849",
    note: "A Delhi crisis-intervention centre for people who are depressed, distressed or suicidal, offering listening by phone and in person, 365 days a year.",
  },
  {
    id: "lifeline-kolkata",
    name: "Lifeline Foundation",
    region: "Kolkata",
    contact: "+91 90880 30303",
    tel: "+919088030303",
    chat: "https://www.lifelinefoundation.in/",
    hours: "Daily, all year · Shift hours",
    note: "West Bengal's only organisation of its kind — free, anonymous, non-judgmental emotional support from trained volunteers. A member of Befrienders Worldwide.",
  },
  {
    id: "saath",
    name: "Saath",
    region: "Ahmedabad",
    contact: "+91 79 2630 5544",
    tel: "+917926305544",
    chat: "https://saathindia.org/",
    hours: "Daily · 1 – 7 pm · Also +91 79 2630 0222",
    note: "Saath walks with people caught between the will to live and the urge to die — by phone, email, letters and face-to-face sessions, free and confidential.",
  },
  {
    id: "parivarthan",
    name: "Parivarthan",
    region: "Bengaluru",
    contact: "+91 7676 602 602",
    tel: "+917676602602",
    chat: "https://www.parivarthan.org",
    hours: "Mon–Fri · 4 – 10 pm",
    note: "Counselling helpline services in English, Hindi, Kannada and Tamil, staffed by trained volunteer counsellors supervised by professionals.",
  },
  {
    id: "maithri",
    name: "Maithri",
    region: "Kochi",
    contact: "+91 484 254 0530",
    tel: "+914842540530",
    chat: "https://maithrikochi.org",
    hours: "Daily · 10 am – 7 pm",
    note: "A suicide-prevention centre offering befriending services for anyone in emotional crisis, in Malayalam and English.",
  },
  {
    id: "fortis",
    name: "Fortis Stress Helpline",
    region: "Delhi NCR",
    contact: "+91 83768 04102",
    tel: "+918376804102",
    chat: "https://www.fortishealthcare.com",
    hours: "24×7",
    note: "A round-the-clock stress and mental-health helpline run by Fortis clinicians — useful when you want to speak to a medical professional quickly.",
  },
];

export const directories: { label: string; href: string; note: string }[] = [
  {
    label: "Find A Helpline — India",
    href: "https://findahelpline.com/countries/in",
    note: "Verified free helplines across every Indian state, filterable by topic.",
  },
  {
    label: "AASRA helpline directory",
    href: "https://www.aasra.info/helpline.html",
    note: "AASRA's state-by-state list of working suicide-prevention helplines in India.",
  },
  {
    label: "Befrienders Initiative — India",
    href: "https://befriendersinitiative.org/",
    note: "The Indian chapter of Befrienders Worldwide — member centres across the country.",
  },
];

export const warningSigns: { title: string; body: string }[] = [
  {
    title: "Talking about wanting to die or end one's life",
    body: "Any statement — even one said half-jokingly — about suicide, being a burden, or not wanting to be here deserves to be taken seriously.",
  },
  {
    title: "Looking for ways to end one's life",
    body: "Searching for methods, acquiring pills, pesticides or other means, or giving away treasured belongings are urgent warning signs.",
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
    body: "Sleeping far more or far less, neglecting meals or self-care, slipping performance at work, college or school, rising alcohol or drug use.",
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
    time: "One session with a counsellor",
    steps: [
      "List your personal warning signs that a crisis may be developing.",
      "List coping strategies you can use on your own, then people and places that provide distraction.",
      "Write down the people you can ask for help and the helplines above to contact.",
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
      "In India, start with Tele-MANAS (14416) — counsellors can refer you to free District Mental Health Programme services near you.",
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
    body: "Indian helplines are confidential and free. You can stay anonymous, share as much or as little as you want, and end the call whenever you like.",
  },
  {
    title: "You don't have to be suicidal",
    body: "Lines exist for any emotional pain — exam and job stress, loneliness, grief, family pressure, self-harm thoughts, or simply a bad night. If it matters to you, it matters to them.",
  },
  {
    title: "A trained human answers",
    body: "You'll reach a trained counsellor or volunteer who listens without judgment. There is no script and no wrong way to talk — crying, silence, anger, short sentences: all of it is fine.",
  },
  {
    title: "Help in your language",
    body: "Tele-MANAS answers in over twenty Indian languages, and most NGO helplines respond in English and Hindi plus their regional language. You never have to switch languages to be heard.",
  },
];

export const sources: { label: string; href: string }[] = [
  {
    label: "Tele-MANAS — Ministry of Health & Family Welfare",
    href: "https://telemanas.mohfw.gov.in/",
  },
  {
    label: "National Mental Health Programme — DGHS, MoHFW",
    href: "https://dghs.mohfw.gov.in/national-mental-health-programme.php",
  },
  {
    label: "AASRA — Suicide prevention & counselling",
    href: "https://aasra.info/",
  },
  {
    label: "AASRA — India helpline directory",
    href: "https://www.aasra.info/helpline.html",
  },
  {
    label: "Vandrevala Foundation — free counselling",
    href: "https://www.vandrevalafoundation.com/free-counseling",
  },
  { label: "iCALL — TISS psychosocial helpline", href: "https://icallhelpline.org/" },
  { label: "SNEHA — Chennai", href: "https://snehaindia.org" },
  { label: "SUMAITRI — Delhi", href: "https://sumaitri.net" },
  { label: "Lifeline Foundation — Kolkata", href: "https://www.lifelinefoundation.in/" },
  { label: "Saath — Ahmedabad", href: "https://saathindia.org/" },
  {
    label: "Find A Helpline — India",
    href: "https://findahelpline.com/countries/in",
  },
  {
    label: "Befrienders Initiative — India",
    href: "https://befriendersinitiative.org/",
  },
  {
    label: "ERSS 112 — National emergency response",
    href: "https://112.gov.in",
  },
  {
    label: "AFSP — Risk factors & warning signs",
    href: "https://afsp.org/risk-factors-protective-factors-and-warning-signs/",
  },
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
