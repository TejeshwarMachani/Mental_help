import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="" className="size-6" aria-hidden />
            <span className="text-sm font-semibold tracking-tight">
              Mental Help
            </span>
          </a>
          <a
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to home
          </a>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="max-w-md text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            404
          </p>
          <h1 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            This page does not exist.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            But the helplines still do. If you are in crisis right now, they
            are free, confidential, and answered by real people.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a href="tel:14416" className="w-full sm:w-auto">
              <Button className="w-full gap-2 sm:w-auto">
                <Phone className="size-4" />
                Call Tele-MANAS 14416
              </Button>
            </a>
            <a
              href="tel:112"
              className="text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
            >
              In immediate danger: call 112
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto px-6 py-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mental Help · India
        </div>
      </footer>
    </div>
  );
}
