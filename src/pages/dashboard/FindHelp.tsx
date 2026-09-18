import { stateHelplines, directories } from "@/lib/content";
import { Input } from "@/components/ui/input";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

export default function FindHelp() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const states = useMemo(
    () =>
      !query
        ? stateHelplines
        : stateHelplines.filter(
            (s) =>
              s.state.toLowerCase().includes(query) ||
              s.services.some((sv) => sv.name.toLowerCase().includes(query)),
          ),
    [query],
  );

  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Find help</p>
        <h1 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
          From a helpline to ongoing care
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          The Indian system has real free pathways — you do not need money to
          start. Here is the honest route map, then services near you.
        </p>
      </header>

      {/* The route map */}
      <section className="border border-border p-6 sm:p-8">
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          The free route to a therapist in India
        </h2>
        <ol className="mt-5 max-w-2xl space-y-4 text-sm leading-relaxed">
          <li className="flex gap-4">
            <span className="font-medium tabular-nums text-muted-foreground">1.</span>
            <span>
              <strong>Call Tele-MANAS 14416.</strong> Say you want ongoing
              help, not just today's call. Counsellors can register you into
              the District Mental Health Programme (DMHP) — which provides{" "}
              <strong>free psychiatric consultation and medicines</strong> at
              district hospitals.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="font-medium tabular-nums text-muted-foreground">2.</span>
            <span>
              <strong>Visit a district hospital's psychiatry OPD.</strong> Under
              the Mental Healthcare Act 2017, government mental-health care is
              your right, and CMHI/DMHP centres exist in 700+ districts. Cost:
              free to a few hundred rupees.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="font-medium tabular-nums text-muted-foreground">3.</span>
            <span>
              <strong>If you have insurance:</strong> since 2022 the IRDAI
              mandates health insurers cover mental illness the same as physical
              illness. Check your policy — therapy and psychiatric treatment
              are covered.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="font-medium tabular-nums text-muted-foreground">4.</span>
            <span>
              <strong>Low-cost NGO therapy</strong> (below) typically ranges
              from free to ₹300–800 per session with qualified psychologists.
            </span>
          </li>
        </ol>
      </section>

      {/* Government / institutional portals */}
      <section>
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Official portals &amp; national resources
        </h2>
        <div className="mt-4 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {[
            {
              name: "Tele-MANAS",
              desc: "National tele-mental-health service — counselling + referral into government care. 14416, 24×7, 20+ languages.",
              href: "https://telemanas.mohfw.gov.in/",
              cta: "telemanas.mohfw.gov.in",
            },
            {
              name: "DISHA / NIMHANS services",
              desc: "NIMHANS Bengaluru runs India's largest public mental-health hospital, with subsidised OPD and tele-manas integration.",
              href: "https://nimhans.ac.in/",
              cta: "nimhans.ac.in",
            },
            {
              name: "Ayushman Bharat (PM-JAY)",
              desc: "If eligible, mental-health treatment is covered under the ₹5 lakh/family government insurance scheme.",
              href: "https://pmjay.gov.in/",
              cta: "pmjay.gov.in",
            },
            {
              name: "IRDAI mental-health coverage rules",
              desc: "Your existing health insurance must cover mental illness equally — know your rights before paying out of pocket.",
              href: "https://irdai.gov.in/",
              cta: "irdai.gov.in",
            },
          ].map((r) => (
            <article key={r.name} className="bg-background p-6 sm:p-8">
              <h3 className="font-medium tracking-tight">{r.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                {r.cta}
                <ArrowUpRight className="size-3.5" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Low-cost therapy organisations */}
      <section>
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Low-cost &amp; NGO therapy services
        </h2>
        <div className="mt-4 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {[
            {
              name: "Parivarthan, Bengaluru",
              desc: "Counselling in English, Hindi, Kannada, Tamil. ₹300–600 sliding scale; free helpline +91 7676 602 602 (Mon–Fri 4–10 pm).",
              href: "https://www.parivarthan.org",
            },
            {
              name: "Tiss iCALL",
              desc: "Free counselling by phone/email by TISS professionals: +91 91529 87821, icall@tiss.edu (Mon–Sat 8 am–9 pm).",
              href: "https://icallhelpline.org/",
            },
            {
              name: "Manas Foundation, Delhi",
              desc: "Psychological services with sliding-scale fees; runs men-focused programmes too.",
              href: "https://manas.org.in/",
            },
            {
              name: "The Maitri / Iswar Sankalpa, Kolkata",
              desc: "Community mental-health support for homeless and low-income clients; low-cost counselling.",
              href: "https://isankalpa.org/",
            },
            {
              name: "Schizophrenia Awareness Association, Pune",
              desc: "Free peer support groups for families and people living with severe mental illness (Ekbhayde).",
              href: "https://saaindia.org/",
            },
            {
              name: "Connecting Trust, Pune",
              desc: "Counselling and suicide-prevention with sliding-scale fees; toll-free 1800 843 4353 (daily 12–8 pm).",
              href: "https://connectingngo.org/",
            },
          ].map((r) => (
            <article key={r.name} className="bg-background p-6 sm:p-8">
              <h3 className="font-medium tracking-tight">{r.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                Visit website
                <ArrowUpRight className="size-3.5" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* State services search */}
      <section>
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Crisis lines by state
        </h2>
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search your state or a service — e.g. Bengaluru"
          className="mt-4 h-11 max-w-md rounded-none border-border bg-background text-sm"
        />
        {states.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            No match — call Tele-MANAS 14416; it works everywhere.
          </p>
        ) : (
          <ul className="mt-4 grid gap-x-12 sm:grid-cols-2">
            {states.slice(0, 12).map((s) => (
              <li key={s.state} className="border-b border-border py-4">
                <p className="text-sm font-medium">{s.state}</p>
                {s.services.length > 0 ? (
                  <ul className="mt-1.5 space-y-1">
                    {s.services.slice(0, 3).map((sv) => (
                      <li key={sv.name} className="text-sm text-muted-foreground">
                        {sv.name} ·{" "}
                        {sv.tel ? (
                          <a href={`tel:${sv.tel}`} className="underline decoration-border underline-offset-4 hover:text-foreground">
                            {sv.contact}
                          </a>
                        ) : (
                          sv.contact
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-1.5 text-sm text-muted-foreground">Tele-MANAS 14416</p>
                )}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 text-xs text-muted-foreground">
          Full state directory on the{" "}
          <a href="/#helplines" className="underline decoration-border underline-offset-4 hover:text-foreground">
            homepage helplines section
          </a>{" "}
          and {directories.length} external directories.
        </p>
      </section>
    </div>
  );
}
