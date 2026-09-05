import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  expectations,
  internationalHelplines,
  primaryHelplines,
  sources,
  techniques,
  warningSigns,
} from "@/lib/content";

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {children}
        </p>
      ) : null}
    </div>
  );
}

function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/source inline-flex items-center gap-1 text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
    >
      {children}
      <ArrowUpRight className="size-3.5 shrink-0 transition-transform group-hover/source:-translate-y-0.5 group-hover/source:translate-x-0.5" />
    </a>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="" className="size-6" aria-hidden />
            <span className="text-sm font-semibold tracking-tight">
              Mental Help
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#helplines" className="transition-colors hover:text-foreground">
              Helplines
            </a>
            <a href="#signs" className="transition-colors hover:text-foreground">
              Warning signs
            </a>
            <a href="#getting-through" className="transition-colors hover:text-foreground">
              Getting through
            </a>
            <a href="#sources" className="transition-colors hover:text-foreground">
              Sources
            </a>
          </nav>
          <a href="tel:988">
            <Button size="sm" className="gap-2">
              <Phone className="size-3.5" />
              Call 988
            </Button>
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pt-32"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Free · Confidential · 24/7
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
            You are not alone.
            <br />
            Help is one call away.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Mental Help brings together crisis helplines, the warning signs to
            watch for, and proven ways to get through — every technique on this
            page links to its source.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="tel:988" className="sm:w-auto">
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                <Phone className="size-4" />
                Call 988 now
              </Button>
            </a>
            <a href="sms:741741" className="sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Text HOME to 741741
              </Button>
            </a>
            <a
              href="https://chat.988lifeline.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-1.5 px-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:justify-start"
            >
              Chat online instead
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Outside the US?{" "}
            <a
              href="https://findahelpline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Find a verified helpline in your country
            </a>
            .
          </p>
        </motion.section>

        {/* Immediate danger strip */}
        <section className="bg-foreground text-background">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-relaxed">
              <span className="font-semibold">
                If someone is in immediate danger
              </span>{" "}
              — seriously injured, or a life is at risk right now — skip the
              helplines and call emergency services, or go to the nearest
              emergency room.
            </p>
            <a
              href="tel:911"
              className="shrink-0 border border-background/40 px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors hover:bg-background hover:text-foreground"
            >
              Call 911
            </a>
          </div>
        </section>

        {/* Helplines */}
        <section id="helplines" className="scroll-mt-20">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
            <SectionHeading
              eyebrow="Start here"
              title="Helplines that answer around the clock"
            >
              Every service below is free and confidential. Calling is the
              fastest option; texting and chat are there for the moments when
              talking out loud feels impossible.
            </SectionHeading>

            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {primaryHelplines.map((line) => (
                <article key={line.id} className="bg-background p-6 sm:p-8">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-medium tracking-tight">
                      {line.name}
                    </h3>
                    <span className="shrink-0 text-xs uppercase tracking-widest text-muted-foreground">
                      {line.region}
                    </span>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {line.hours}
                  </p>
                  <p className="mt-5 text-2xl font-medium tracking-tight">
                    {line.tel ? (
                      <a
                        href={`tel:${line.tel}`}
                        className="underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground"
                      >
                        {line.contact}
                      </a>
                    ) : (
                      line.contact
                    )}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {line.note}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {line.tel ? (
                      <a
                        href={`tel:${line.tel}`}
                        className="font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                      >
                        Call
                      </a>
                    ) : null}
                    {line.sms ? (
                      <a
                        href={`sms:${line.sms}`}
                        className="font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                      >
                        Text
                      </a>
                    ) : null}
                    {line.chat ? (
                      <a
                        href={line.chat}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                      >
                        Visit site
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Elsewhere in the world
              </h3>
              <div className="mt-6 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                {internationalHelplines.map((line) => (
                  <article key={line.id} className="bg-background p-6 sm:p-8">
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="font-medium tracking-tight">{line.name}</h4>
                      <span className="shrink-0 text-xs uppercase tracking-widest text-muted-foreground">
                        {line.region}
                      </span>
                    </div>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {line.hours}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {line.note}
                    </p>
                    <a
                      href={line.chat}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                    >
                      {line.contact}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Warning signs */}
        <section id="signs" className="scroll-mt-20 border-t border-border bg-secondary">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
            <SectionHeading
              eyebrow="Know the signs"
              title="Warning signs that deserve attention"
            >
              One sign alone may not mean a crisis — but a pattern, or any of
              the first two, should never be ignored. Source:{" "}
              <SourceLink href="https://afsp.org/risk-factors-protective-factors-and-warning-signs/">
                AFSP — Risk factors &amp; warning signs
              </SourceLink>
            </SectionHeading>

            <ul className="mt-12 divide-y divide-border border-y border-border">
              {warningSigns.map((sign, i) => (
                <li key={sign.title} className="flex gap-6 py-6 sm:gap-10">
                  <span className="w-8 shrink-0 text-sm tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-medium tracking-tight">{sign.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {sign.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 border border-border bg-background p-6 sm:p-8">
              <p className="max-w-2xl text-sm leading-relaxed">
                <span className="font-semibold">
                  If several of these sound familiar — for you or someone you
                  love
                </span>{" "}
                — reach out today. Asking is the hardest step, and it is also
                the one that changes everything.
              </p>
              <div className="mt-5 flex flex-wrap gap-6 text-sm font-medium">
                <a
                  href="tel:988"
                  className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  Call 988
                </a>
                <a
                  href="sms:741741"
                  className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  Text HOME to 741741
                </a>
                <SourceLink href="https://988lifeline.org/learn/">
                  How anyone can help prevent suicide — 988 Lifeline
                </SourceLink>
              </div>
            </div>
          </div>
        </section>

        {/* Getting through */}
        <section id="getting-through" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
            <SectionHeading
              eyebrow="Getting through it"
              title="Proven ways out of the darkest moments"
            >
              These are not platitudes — each technique below comes from a
              public-health authority or peer-reviewed intervention, with the
              source attached. Start small. One breath, one step, one message.
            </SectionHeading>

            <Accordion type="single" collapsible className="mt-12 border-y border-border">
              {techniques.map((t, i) => (
                <AccordionItem key={t.id} value={t.id} className="border-border">
                  <AccordionTrigger className="py-6 text-left hover:no-underline">
                    <span className="flex items-baseline gap-5 sm:gap-8">
                      <span className="w-8 shrink-0 text-sm tabular-nums text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex flex-col gap-1.5">
                        <span className="text-base font-medium tracking-tight sm:text-lg">
                          {t.title}
                        </span>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground">
                          For {t.for} · {t.time}
                        </span>
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <div className="pl-0 sm:pl-[3.25rem]">
                      <ol className="max-w-2xl space-y-3 text-sm leading-relaxed text-muted-foreground">
                        {t.steps.map((step, si) => (
                          <li key={si} className="flex gap-3">
                            <span className="mt-px shrink-0 tabular-nums">
                              {si + 1}.
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                      <div className="mt-5">
                        <SourceLink href={t.source.href}>
                          Source: {t.source.label}
                        </SourceLink>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Coping techniques help you through the moment. For lasting
              change, they work best alongside professional care — a helpline
              above can help you find free or low-cost options near you.
            </p>
          </div>
        </section>

        {/* What to expect */}
        <section className="border-t border-border bg-secondary">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
            <SectionHeading
              eyebrow="Reaching out"
              title="What actually happens when you call"
            >
              If the unknown is what is stopping you, this is what a first
              contact is really like.
            </SectionHeading>

            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {expectations.map((item) => (
                <article key={item.title} className="bg-background p-6 sm:p-8">
                  <h3 className="font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              More detail:{" "}
              <SourceLink href="https://findahelpline.com">
                Find A Helpline — using a helpline, what to expect
              </SourceLink>
            </p>
          </div>
        </section>

        {/* Sources */}
        <section id="sources" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
            <SectionHeading
              eyebrow="Sources"
              title="Everything here is cited"
            >
              Information on this site is drawn from established crisis and
              public-health organisations. The services themselves are
              independent of — and unaffiliated with — this site.
            </SectionHeading>

            <ul className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {sources.map((s) => (
                <li key={s.href} className="border-b border-border pb-4">
                  <SourceLink href={s.href}>{s.label}</SourceLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="flex flex-col justify-between gap-10 sm:flex-row">
            <div>
              <div className="flex items-center gap-2.5">
                <img src="/logo.svg" alt="" className="size-6" aria-hidden />
                <span className="text-sm font-semibold tracking-tight">
                  Mental Help
                </span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Mental Help is an information directory, not a treatment
                provider, and it cannot respond to messages. If you are in
                crisis right now, use the helplines on this page or call your
                local emergency number.
              </p>
            </div>
            <div className="shrink-0">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                In crisis right now
              </p>
              <a
                href="tel:988"
                className="mt-3 block text-lg font-medium underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground"
              >
                Call 988
              </a>
              <a
                href="sms:741741"
                className="mt-1.5 block text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
              >
                Text HOME to 741741
              </a>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-6">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Mental Help · If you are in
              immediate danger, call 911 (US) or your local emergency number.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
