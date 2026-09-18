import { Link } from "react-router";

export const TERMS_VERSION = "1.0";
export const PRIVACY_VERSION = "1.0";
export const LAST_UPDATED = "18 September 2026";

export function LegalShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="" className="size-6" aria-hidden />
            <span className="text-sm font-semibold tracking-tight">Mental Help</span>
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to home
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Legal · Version {title.includes("Terms") ? TERMS_VERSION : PRIVACY_VERSION} · Last updated {LAST_UPDATED}
        </p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">{title}</h1>
        <div className="mt-10 space-y-8">{children}</div>
        <div className="mt-16 border-t border-border pt-6 text-sm text-muted-foreground">
          <Link to="/" className="underline decoration-border underline-offset-4 hover:decoration-foreground">
            ← Back to Mental Help
          </Link>
        </div>
      </main>
    </div>
  );
}

export function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="flex items-baseline gap-3 text-lg font-medium tracking-tight">
        <span className="text-sm tabular-nums text-muted-foreground">{String(n).padStart(2, "0")}</span>
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}
