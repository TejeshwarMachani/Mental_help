import { useWellness } from "@/hooks/use-wellness";
import { useState } from "react";

export default function Journal() {
  const { journal, createJournal, deleteJournal } = useWellness();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!body.trim()) return;
    setSaving(true);
    try {
      await createJournal({ title: title.trim() || undefined, body });
      setTitle("");
      setBody("");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Journal</p>
        <h1 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
          Write it out
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Expressive writing helps process difficult emotions — there is no
          right way to do it. Entries are private to your account and can be
          deleted at any time.
        </p>
      </header>

      {/* Composer */}
      <section className="border border-border p-6 sm:p-8">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title (optional)"
          maxLength={120}
          className="w-full border-0 bg-transparent text-lg font-medium tracking-tight outline-none placeholder:text-muted-foreground/60"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="What's on your mind? Honest and messy is fine…"
          rows={6}
          maxLength={20000}
          className="mt-3 w-full resize-y border-0 bg-transparent text-sm leading-relaxed outline-none placeholder:text-muted-foreground/60"
        />
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs text-muted-foreground">{body.length.toLocaleString("en-IN")} / 20,000</span>
          <button
            type="button"
            disabled={!body.trim() || saving}
            onClick={handleSave}
            className="border border-foreground bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity disabled:opacity-40"
          >
            {saving ? "Saving…" : "Save entry"}
          </button>
        </div>
      </section>

      {/* Prompts */}
      <section>
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Stuck? Try a prompt
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "What drained me today, and what filled me up?",
            "What would I tell a friend who felt this way?",
            "What is one thing I can do tomorrow to make it 1% better?",
            "What am I avoiding, and what is the smallest first step?",
          ].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setBody((b) => (b ? `${b}\n\n${p}\n` : `${p}\n`))}
              className="border border-border px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {p}
            </button>
          ))}
        </div>
      </section>

      {/* Entries */}
      <section>
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {journal.length > 0 ? `${journal.length} ${journal.length === 1 ? "entry" : "entries"}` : "Entries"}
        </h2>
        {journal.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">Nothing written yet.</p>
        ) : (
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {journal.map((e) => (
              <li key={e._id} className="py-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium tracking-tight">{e.title || "Untitled"}</h3>
                  <time className="shrink-0 text-xs text-muted-foreground">
                    {new Date(e.createdAt).toLocaleString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </time>
                </div>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                  {e.body}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    if (confirm("Delete this entry? This cannot be undone.")) {
                      deleteJournal({ id: e._id });
                    }
                  }}
                  className="mt-3 text-xs text-muted-foreground underline decoration-border underline-offset-4 hover:text-destructive"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
