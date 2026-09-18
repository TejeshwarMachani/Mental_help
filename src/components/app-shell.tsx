import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import {
  BookHeart,
  ClipboardList,
  Flower2,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  NotebookPen,
  Phone,
} from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router";

const NAV = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/dashboard/mood", label: "Mood tracker", icon: Flower2 },
  { to: "/dashboard/assessments", label: "Self-assessment", icon: ClipboardList },
  { to: "/dashboard/journal", label: "Journal", icon: NotebookPen },
  { to: "/dashboard/exercises", label: "Guided exercises", icon: BookHeart },
  { to: "/dashboard/find-help", label: "Find help", icon: LifeBuoy },
];

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {NAV.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
              isActive
                ? "bg-foreground text-background font-medium"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`
          }
        >
          <Icon className="size-4 shrink-0" aria-hidden />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Crisis strip */}
      <div className="border-b border-border bg-foreground text-background">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-2.5 sm:flex-row sm:items-center">
          <p className="text-xs leading-relaxed sm:text-sm">
            <span className="font-semibold">In crisis?</span> Tele-MANAS{" "}
            <a href="tel:14416" className="underline underline-offset-4">
              14416
            </a>{" "}
            · KIRAN{" "}
            <a href="tel:18005990019" className="underline underline-offset-4">
              1800-599-0019
            </a>{" "}
            · Emergency{" "}
            <a href="tel:112" className="underline underline-offset-4">
              112
            </a>
          </p>
          <Link
            to="/dashboard/emergency"
            className="shrink-0 border border-background/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-background hover:text-foreground"
          >
            Emergency support
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 border-r border-border md:block">
          <div className="sticky top-0 flex h-screen flex-col p-5">
            <Link to="/" className="mb-8 flex items-center gap-2.5">
              <img src="/logo.svg" alt="" className="size-6" aria-hidden />
              <span className="text-sm font-semibold tracking-tight">Mental Help</span>
            </Link>
            <NavLinks />
            <div className="mt-auto space-y-3">
              <Link
                to="/dashboard/emergency"
                className="flex items-center gap-3 border border-foreground px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
              >
                <Phone className="size-4" aria-hidden />
                Get urgent help
              </Link>
              {user?.email ? (
                <p className="truncate px-1 text-xs text-muted-foreground" title={user.email}>
                  Signed in as {user.email}
                </p>
              ) : null}
              <Button
                variant="outline"
                className="w-full justify-start gap-3 rounded-none border-border"
                onClick={handleSignOut}
              >
                <LogOut className="size-4" aria-hidden />
                Sign out
              </Button>
            </div>
          </div>
        </aside>

        {/* Mobile header + nav */}
        <div className="border-b border-border md:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="" className="size-5" aria-hidden />
              <span className="text-sm font-semibold">Mental Help</span>
            </Link>
            <Button variant="outline" size="sm" onClick={handleSignOut} className="gap-2">
              <LogOut className="size-3.5" />
              Sign out
            </Button>
          </div>
          <div className="overflow-x-auto px-4 pb-3">
            <div className="flex w-max gap-1">
              {NAV.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `whitespace-nowrap border px-3 py-1.5 text-xs transition-colors ${
                      isActive
                        ? "border-foreground bg-foreground text-background font-medium"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <main className="min-w-0 flex-1 px-5 py-8 sm:px-8 sm:py-10">{children}</main>
      </div>

      {/* Mobile floating crisis button */}
      <a
        href="tel:14416"
        aria-label="Call Tele-MANAS 14416 now"
        className="fixed right-4 bottom-4 z-50 flex items-center gap-2 border border-foreground bg-background px-3.5 py-2.5 text-sm font-semibold shadow-lg transition-colors hover:bg-foreground hover:text-background md:hidden"
      >
        <Phone className="size-4" aria-hidden />
        14416
      </a>
    </div>
  );
}
