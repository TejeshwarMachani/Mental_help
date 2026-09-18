import { localDateKey, useWellness } from "@/hooks/use-wellness";
import { useState } from "react";

const MOODS = [
  { value: 1, emoji: "\u{1F641}", label: "Very low" },
  { value: 2, emoji: "\u{1F615}", label: "Low" },
  { value: 3, emoji: "\u{1F610}", label: "Okay" },
  { value: 4, emoji: "\u{1F642}", label: "Good" },
  { value: 5, emoji: "\u{1F60A}", label: "Great" },
];

const FACTORS = ["Sleep", "Work / study", "Family", "Health", "Money", "People", "Loneliness"] as const;

export default function Mood() {
  const { moodToday, moodHistory, saveMood } = useWellness();
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = async (mood: number, withNote?: string) => {
    await saveMood(mood, withNote?.trim() || undefined);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Mood tracker</p>
        <h1 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">Daily check-in</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          One honest tap a day builds a picture of your patterns — and shows
          whether things are improving over weeks, not hours.
        </p>
      </header>

      {/* Today */}
      <section className="border border-border p-6 sm:p-8">
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Today · {formatDate(localDateKey())}
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {MOODS.map((m) => (
            <button
              key={m.value}
              type="button"
              onClick={() => handleSave(m.value)}
              className={`flex flex-col items-center gap-1.5 border px-4 py-3 text-xs transition-colors ${
                moodToday?.mood === m.value
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              <span className="text-xl" aria-hidden>{m.emoji}</span>
              {m.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <label htmlFor="mood-note" className="text-xs uppercase tracking-widest text-muted-foreground">
            Optional note — what shaped today?
          </label>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <input
              id="mood-note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Slept badly, good walk in the evening…"
              maxLength={200}
              className="h-10 flex-1 border border-border bg-background px-3 text-sm outline-none focus:border-foreground"
            />
            <button
              type="button"
              disabled={!moodToday}
              onClick={() => moodToday && handleSave(moodToday.mood, note)}
              className="h-10 border border-foreground px-4 text-sm font-medium transition-colors hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-40"
            >
              {saved ? "Saved" : "Save note"}
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {FACTORS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setNote((n) => (n ? `${n}, ${f.toLowerCase()}` : f))}
                className="border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                + {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section>
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Last 60 days</h2>
        {moodHistory.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            No check-ins yet — today is day one.
          </p>
        ) : (
          <>
            <div className="mt-4 grid grid-cols-14 gap-1" style={{ gridTemplateColumns: "repeat(30, minmax(0, 1fr))" }}>
              {lastNDays(60).map((date) => {
                const entry = moodHistory.find((m) => m.date === date);
                return (
                  <div
                    key={date}
                    title={`${formatDate(date)}${entry ? ` · ${MOODS[entry.mood - 1].label}${entry.note ? ` — ${entry.note}` : ""}` : ""}`}
                    className={`aspect-square ${entry ? levelClass(entry.mood) : "bg-secondary border border-border"}`}
                  />
                );
              })}
            </div>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {[...moodHistory].slice(0, 14).map((m) => (
                <li key={m.date} className="flex items-baseline justify-between gap-4 py-3 text-sm">
                  <span className="text-muted-foreground">{formatDate(m.date)}</span>
                  <span className="truncate text-muted-foreground">{m.note}</span>
                  <span className="shrink-0 font-medium">{MOODS[m.mood - 1].label}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  );
}

function levelClass(mood: number): string {
  switch (mood) {
    case 5: return "bg-foreground";
    case 4: return "bg-foreground/80";
    case 3: return "bg-foreground/55";
    case 2: return "bg-foreground/30";
    default: return "bg-foreground/15";
  }
}

function lastNDays(n: number): string[] {
  const out: string[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    out.push(localDateKey(d));
  }
  return out;
}

function formatDate(key: string): string {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}
