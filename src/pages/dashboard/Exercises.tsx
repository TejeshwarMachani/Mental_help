import { techniques } from "@/lib/content";
import { ArrowUpRight, Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ------------------------- Box breathing component ------------------------ */

function BreathingTimer() {
  const PHASES = [
    { name: "Breathe in", seconds: 4 },
    { name: "Hold", seconds: 4 },
    { name: "Breathe out", seconds: 4 },
    { name: "Hold", seconds: 4 },
  ] as const;

  const [running, setRunning] = useState(false);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [remaining, setRemaining] = useState<number>(PHASES[0].seconds);
  const [cycles, setCycles] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    timer.current = setInterval(() => {
      setRemaining((r) => {
        if (r > 1) return r - 1;
        setPhaseIdx((p) => {
          const next = (p + 1) % PHASES.length;
          if (next === 0) setCycles((c) => c + 1);
          setRemaining(PHASES[next].seconds);
          return next;
        });
        return PHASES[(phaseIdx + 1) % PHASES.length].seconds;
      });
    }, 1000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [running, phaseIdx, PHASES]);

  const reset = () => {
    setRunning(false);
    setPhaseIdx(0);
    setRemaining(PHASES[0].seconds);
    setCycles(0);
  };

  const phase = PHASES[phaseIdx];
  const scale = phase.name === "Breathe in" || phase.name === "Hold" && phaseIdx === 1 ? "scale-100" : "scale-75";

  return (
    <section className="border border-foreground p-6 sm:p-10">
      <div className="flex flex-col items-center">
        <div className={`flex size-40 items-center justify-center rounded-full border border-foreground transition-transform duration-1000 ${scale}`}>
          <div className="text-center">
            <p className="text-lg font-medium tracking-tight">{phase.name}</p>
            <p className="mt-1 text-3xl tabular-nums">{remaining}</p>
          </div>
        </div>
        <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
          {cycles} {cycles === 1 ? "cycle" : "cycles"} complete
        </p>
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={() => setRunning((r) => !r)}
            className="flex items-center gap-2 border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background"
          >
            {running ? <Pause className="size-4" /> : <Play className="size-4" />}
            {running ? "Pause" : "Start"}
          </button>
          <button
            type="button"
            onClick={reset}
            className="flex items-center gap-2 border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            <RotateCcw className="size-4" />
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Page -------------------------------- */

export default function Exercises() {
  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Guided exercises</p>
        <h1 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
          Tools for the moment
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Start with the breathing circle below, then work through the
          evidence-based techniques — each links to its source.
        </p>
      </header>

      <BreathingTimer />

      <section>
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Proven techniques, step by step
        </h2>
        <ul className="mt-4 divide-y divide-border border-y border-border">
          {techniques.map((t) => (
            <li key={t.id} className="py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium tracking-tight">{t.title}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {t.for} · {t.time}
                </span>
              </div>
              <ol className="mt-3 max-w-2xl space-y-2 text-sm leading-relaxed text-muted-foreground">
                {t.steps.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 tabular-nums">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
              <a
                href={t.source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground"
              >
                Source: {t.source.label}
                <ArrowUpRight className="size-3" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
