import { Phone } from "lucide-react";

const NATIONAL = [
  {
    name: "Tele-MANAS (Govt of India)",
    tel: "14416",
    display: "14416 / 1800-891-4416",
    hours: "24×7 · Free · 20+ languages",
  },
  {
    name: "KIRAN (Govt of India)",
    tel: "18005990019",
    display: "1800-599-0019",
    hours: "24×7 · Free · 13 languages",
  },
  {
    name: "Vandrevala Foundation",
    tel: "+919999666555",
    display: "+91 9999 666 555",
    hours: "24×7 · Also WhatsApp",
  },
  {
    name: "AASRA, Mumbai",
    tel: "+912227546669",
    display: "+91 22 2754 6669",
    hours: "24×7 · English & Hindi",
  },
  {
    name: "Emergency — ambulance & police",
    tel: "112",
    display: "112 (national) · 108 (ambulance)",
    hours: "24×7",
  },
];

export default function Emergency() {
  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Emergency support</p>
        <h1 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
          If you need help right now
        </h1>
      </header>

      {/* National lines */}
      <section className="grid gap-px overflow-hidden border border-border bg-border">
        {NATIONAL.map((l) => (
          <a
            key={l.tel}
            href={`tel:${l.tel}`}
            className="flex items-center justify-between gap-4 bg-background px-6 py-5 transition-colors hover:bg-secondary"
          >
            <span>
              <span className="block font-medium tracking-tight">{l.name}</span>
              <span className="mt-0.5 block text-xs uppercase tracking-widest text-muted-foreground">{l.hours}</span>
            </span>
            <span className="flex shrink-0 items-center gap-3">
              <span className="text-right text-sm font-semibold tracking-tight sm:text-base">{l.display}</span>
              <Phone className="size-4 text-muted-foreground" aria-hidden />
            </span>
          </a>
        ))}
      </section>

      {/* Immediate danger */}
      <section className="border border-destructive bg-destructive/5 p-6 sm:p-8">
        <h2 className="font-semibold tracking-tight">If someone is in immediate danger</h2>
        <ul className="mt-4 max-w-2xl space-y-2.5 text-sm leading-relaxed">
          <li>1. Call <a href="tel:112" className="font-semibold underline">112</a> (or 108 for an ambulance) — say it is a mental-health emergency.</li>
          <li>2. Do not leave the person alone if you can help it.</li>
          <li>3. Move away medicines, pesticides, sharp objects and firearms if possible.</li>
          <li>4. Go to the nearest government hospital — emergency psychiatric care cannot be refused for lack of money under the Mental Healthcare Act 2017.</li>
        </ul>
      </section>

      {/* Personal safety plan */}
      <section className="border border-border p-6 sm:p-8">
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Your safety plan</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Write these down now, while you are calm — in your journal or on
          paper. In a dark moment, a written plan is easier to follow than a
          thought. Based on the{" "}
          <a href="https://suicidesafetyplan.com" target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 hover:text-foreground">
            Stanley-Brown Safety Planning Intervention
          </a>
          .
        </p>
        <ol className="mt-5 max-w-2xl space-y-2.5 text-sm leading-relaxed">
          <li>1. My warning signs (thoughts, moods, situations that signal a crisis):</li>
          <li>2. Things I can do on my own to take my mind off things:</li>
          <li>3. People and places that distract me:</li>
          <li>4. People I can ask for help (names + numbers):</li>
          <li>5. Professionals and agencies (Tele-MANAS 14416, my doctor):</li>
          <li>6. Making my environment safe (what to remove / who keeps it):</li>
          <li>7. My reasons for living:</li>
        </ol>
      </section>

      {/* Helping someone else */}
      <section className="border border-border p-6 sm:p-8">
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          If you are worried about someone else
        </h2>
        <ul className="mt-4 max-w-2xl space-y-2.5 text-sm leading-relaxed text-muted-foreground">
          <li>· Ask directly: <em>“Are you thinking about ending your life?”</em> Asking does not plant the idea — it opens the door.</li>
          <li>· Listen without fixing. Do not promise to keep it secret.</li>
          <li>· Stay with them while you call a helpline together.</li>
          <li>· Remove access to means if you can, calmly and without drama.</li>
          <li>· Follow up the next day. The follow-up call matters more than you think.</li>
        </ul>
        <a
          href="/#how-to-help"
          className="mt-5 inline-block text-sm underline decoration-border underline-offset-4 hover:decoration-foreground"
        >
          Read the full conversation guide →
        </a>
      </section>
    </div>
  );
}
