import { useWellness } from "@/hooks/use-wellness";
import { GAD7, PHQ9, screenings, severityFor, type ScreeningDef } from "@/lib/screenings";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Stage = "pick" | "active" | "done";

export default function Assessments() {
  const { assessments, saveAssessment } = useWellness();
  const [def, setDef] = useState<ScreeningDef | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [stage, setStage] = useState<Stage>("pick");

  const latest = (type: string) => assessments.find((a) => a.type === type);

  const start = (d: ScreeningDef) => {
    setDef(d);
    setAnswers(new Array(d.questions.length).fill(-1));
    setStage("active");
    window.scrollTo({ top: 0 });
  };

  const finish = async () => {
    if (!def) return;
    const score = answers.reduce((a, b) => a + b, 0);
    const band = severityFor(def, score);
    const safetyFlag =
      def.safetyQuestionIndex !== undefined &&
      (answers[def.safetyQuestionIndex] ?? 0) > 0;
    await saveAssessment({ type: def.type, answers, score, severity: band.label, safetyFlag });
    setStage("done");
    window.scrollTo({ top: 0 });
  };

  /* ------------------------------- Picker ------------------------------- */
  if (stage === "pick" || !def) {
    return (
      <div className="space-y-10">
        <header>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Self-assessment</p>
          <h1 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
            Two clinically validated checks
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            These are screening tools, not diagnoses. They are the same
            questionnaires clinics use as a first conversation. Results are
            private to your account.
          </p>
        </header>

        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {screenings.map((d) => {
            const prev = latest(d.type);
            return (
              <article key={d.type} className="flex flex-col bg-background p-6 sm:p-8">
                <h2 className="font-medium tracking-tight">{d.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {d.full} · {d.questions.length} questions
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{d.about}</p>
                {prev ? (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Last taken {new Date(prev.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} · score {prev.score} ({prev.severity})
                  </p>
                ) : null}
                <button
                  type="button"
                  onClick={() => start(d)}
                  className="mt-6 self-start border border-foreground px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
                >
                  {prev ? "Retake" : "Start"} {d.name.toLowerCase()}
                </button>
                <a
                  href={d.source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground"
                >
                  Source: {d.source.label}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    );
  }

  /* ------------------------------ Active run ----------------------------- */
  if (stage === "active") {
    const allAnswered = answers.every((a) => a >= 0);
    const idx = answers.findIndex((a) => a < 0);
    return (
      <div className="mx-auto max-w-2xl space-y-8">
        <header>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{def.full}</p>
          <h1 className="mt-2 text-2xl font-medium tracking-tight">{def.name}</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{def.about}</p>
        </header>

        <div className="space-y-8">
          {def.questions.map((q, qi) => (
            <fieldset key={qi} className={qi === idx ? "" : "opacity-70"}>
              <legend className="text-sm font-medium leading-relaxed">
                <span className="mr-2 tabular-nums text-muted-foreground">{qi + 1}.</span>
                Over the last 2 weeks — {q.toLowerCase().endsWith("?") ? q : q}
              </legend>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {def.options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() =>
                      setAnswers((prev) => {
                        const next = [...prev];
                        next[qi] = opt.value;
                        return next;
                      })
                    }
                    className={`border px-3 py-2.5 text-xs transition-colors ${
                      answers[qi] === opt.value
                        ? "border-foreground bg-foreground text-background font-medium"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </fieldset>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border pt-6">
          <button
            type="button"
            onClick={() => {
              setStage("pick");
              setDef(null);
            }}
            className="text-sm text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!allAnswered}
            onClick={finish}
            className="border border-foreground bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity disabled:opacity-40"
          >
            {allAnswered ? "See result" : `${answers.filter((a) => a >= 0).length}/${def.questions.length} answered`}
          </button>
        </div>
      </div>
    );
  }

  /* -------------------------------- Result ------------------------------- */
  const score = answers.reduce((a, b) => a + b, 0);
  const band = severityFor(def, score);
  const safetyFlag =
    def.safetyQuestionIndex !== undefined && (answers[def.safetyQuestionIndex] ?? 0) > 0;

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{def.full}</p>
        <h1 className="mt-2 text-2xl font-medium tracking-tight">Your result</h1>
      </header>

      <section className="border border-border p-6 sm:p-8">
        <p className="text-5xl font-medium tracking-tight">{score}</p>
        <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
          {band.label} range · out of {def.type === "phq9" ? 27 : 21}
        </p>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{band.advice}</p>
      </section>

      {safetyFlag ? (
        <Alert variant="destructive" className="rounded-none border-destructive">
          <AlertTitle className="font-semibold">One more important thing</AlertTitle>
          <AlertDescription className="mt-2 leading-relaxed">
            You indicated thoughts of self-harm or being better off dead. Please
            don&apos;t sit with this alone — call{" "}
            <a href="tel:14416" className="font-semibold underline">Tele-MANAS 14416</a> or{" "}
            <a href="tel:18005990019" className="font-semibold underline">KIRAN 1800-599-0019</a>{" "}
            right now. Both are free, confidential and answered 24×7. If you are
            in immediate danger, call <a href="tel:112" className="font-semibold underline">112</a>.
          </AlertDescription>
        </Alert>
      ) : null}

      <section>
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Where this lands</h2>
        <ul className="mt-4 divide-y divide-border border-y border-border text-sm">
          {def.bands.map((b) => {
            const lo = def.bands[def.bands.indexOf(b) - 1]?.upTo ?? -1;
            const isCurrent = score > lo && score <= b.upTo;
            return (
              <li
                key={b.label}
                className={`flex items-baseline justify-between py-2.5 ${isCurrent ? "font-medium" : "text-muted-foreground"}`}
              >
                <span>
                  {lo + 1}–{b.upTo} · {b.label}
                </span>
                {isCurrent ? <span aria-hidden>← you</span> : null}
              </li>
            );
          })}
        </ul>
      </section>

      <div className="flex flex-wrap gap-4">
        <button
          type="button"
          onClick={() => start(def)}
          className="border border-foreground px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
        >
          Retake
        </button>
        <button
          type="button"
          onClick={() => {
            setStage("pick");
            setDef(null);
          }}
          className="border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
        >
          Back to assessments
        </button>
        <a
          href="/dashboard/find-help"
          className="px-1 py-2.5 text-sm underline decoration-border underline-offset-4 hover:decoration-foreground"
        >
          Find professional help near you →
        </a>
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Score bands follow the published scoring for {def.full}. Source:{" "}
        <a href={def.source.href} target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4">
          {def.source.label}
        </a>
        . This tool stores your answers in your account so you can track change
        over time — see our Privacy Policy.
      </p>
    </div>
  );
}
