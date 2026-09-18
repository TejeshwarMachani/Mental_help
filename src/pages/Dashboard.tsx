import { localDateKey, useWellness } from "@/hooks/use-wellness";
import { GAD7, PHQ9, severityFor } from "@/lib/screenings";
import { ClipboardList, Flower2, NotebookPen } from "lucide-react";
import { Link } from "react-router";

const MOODS = [
  { value: 1, emoji: "\u{1F641}", label: "Very low" },
  { value: 2, emoji: "\u{1F615}", label: "Low" },
  { value: 3, emoji: "\u{1F610}", label: "Okay" },
  { value: 4, emoji: "\u{1F642}", label: "Good" },
  { value: 5, emoji: "\u{1F60A}", label: "Great" },
];

export default function Dashboard() {
  const { moodToday, moodHistory, journal, assessments, saveMood } = useWellness();
  const latestPhq = assessments.find((a) => a.type === "phq9");
  const latestGad = assessments.find((a) => a.type === "gad7");

  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Overview</p>
        <h1 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
          How are you, right now?
        </h1>
      </header>

      {/* Today's check-in */}
      <section className="border border-border p-6 sm:p-8">
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Today · {formatDate(localDateKey())}
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          {moodToday
            ? `You checked in feeling “${MOODS[moodToday.mood - 1].label.toLowerCase()}”. You can change it.`
            : "Tap how you are feeling today — it takes five seconds."}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {MOODS.map((m) => (
            <button
              key={m.value}
              type="button"
              onClick={() => saveMood(m.value)}
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
      </section>

      {/* Trend */}
      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Last 30 days</h2>
          <Link to="/dashboard/mood" className="text-sm underline decoration-border underline-offset-4 hover:decoration-foreground">
            Full history
          </Link>
        </div>
        <div className="mt-4 flex items-end gap-1 border-b border-border pb-2">
          {lastNDays(30).map((date) => {
            const entry = moodHistory.find((m) => m.date === date);
            const mood = entry?.mood ?? 0;
            return (
              <div
                key={date}
                className={`flex-1 ${mood ? "bg-foreground" : "bg-border"}`}
                style={{ height: `${mood ? mood * 8 : 4}px` }}
                title={`${date}${entry ? ` · ${MOODS[entry.mood - 1].label}` : " · no check-in"}`}
              />
            );
          })}
        </div>
      </section>

      {/* Latest screenings */}
      <section className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
        <AssessmentCard def={PHQ9} latest={latestPhq} />
        <AssessmentCard def={GAD7} latest={latestGad} />
      </section>

      {/* Journal shortcut */}
      <section className="border border-border p-6 sm:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            <NotebookPen className="size-4" aria-hidden /> Journal
          </h2>
          <Link to="/dashboard/journal" className="text-sm underline decoration-border underline-offset-4 hover:decoration-foreground">
            Open journal
          </Link>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {journal.length === 0
            ? "Your journal is empty. Writing for even two minutes can help untangle a hard day."
            : `${journal.length} ${journal.length === 1 ? "entry" : "entries"} · latest ${new Date(journal[0].createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}`}
        </p>
      </section>

      {/* Quick links */}
      <section className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
        {[
          { to: "/dashboard/exercises", icon: Flower2, title: "Guided exercises", desc: "Breathing timer and sourced techniques for hard moments." },
          { to: "/dashboard/find-help", icon: ClipboardList, title: "Find a therapist", desc: "The free Indian route to professional care, plus NGO therapy." },
          { to: "/dashboard/emergency", icon: NotebookPen, title: "Emergency support", desc: "Every crisis line and your safety plan, one tap away." },
        ].map((c) => (
          <Link key={c.to} to={c.to} className="group bg-background p-6 transition-colors hover:bg-secondary">
            <c.icon className="size-4 text-muted-foreground" aria-hidden />
            <h3 className="mt-3 font-medium tracking-tight group-hover:underline group-hover:decoration-border group-hover:underline-offset-4">
              {c.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

function AssessmentCard({
  def,
  latest,
}: {
  def: typeof PHQ9;
  latest?: { score: number; severity: string; createdAt: number };
}) {
  return (
    <article className="bg-background p-6 sm:p-8">
      <h3 className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
        <ClipboardList className="size-4" aria-hidden /> {def.name}
      </h3>
      {latest ? (
        <>
          <p className="mt-5 text-3xl font-medium tracking-tight">{latest.score}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {latest.severity} · {new Date(latest.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {severityFor(def, latest.score).advice}
          </p>
        </>
      ) : (
        <>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Not taken yet.</p>
          <Link
            to="/dashboard/assessments"
            className="mt-4 inline-block border border-foreground px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            Take the check
          </Link>
        </>
      )}
    </article>
  );
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
  return new Date(y, m - 1, d).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
}
