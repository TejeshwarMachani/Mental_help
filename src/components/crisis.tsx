import { Phone } from "lucide-react";

/** Persistent emergency strip shown at the top of every dashboard page. */
export function CrisisBanner() {
  return (
    <div className="border-b border-border bg-foreground text-background">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-6 py-3 sm:flex-row sm:items-center">
        <p className="text-xs leading-relaxed sm:text-sm">
          <span className="font-semibold">In crisis?</span> Call Tele-MANAS{" "}
          <a href="tel:14416" className="underline underline-offset-4">
            14416
          </a>{" "}
          · Emergency{" "}
          <a href="tel:112" className="underline underline-offset-4">
            112
          </a>
        </p>
        <a
          href="/emergency"
          className="shrink-0 border border-background/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-background hover:text-foreground"
        >
          Emergency support
        </a>
      </div>
    </div>
  );
}

/** Fixed bottom-right button visible on every app page including public ones. */
export function CrisisFab() {
  return (
    <a
      href="tel:14416"
      aria-label="Call Tele-MANAS 14416 now"
      className="fixed right-5 bottom-5 z-50 flex items-center gap-2 border border-foreground bg-background px-4 py-3 text-sm font-semibold shadow-lg transition-colors hover:bg-foreground hover:text-background"
    >
      <Phone className="size-4" aria-hidden />
      14416
    </a>
  );
}
