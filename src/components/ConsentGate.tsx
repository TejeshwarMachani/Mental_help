import { PRIVACY_VERSION, TERMS_VERSION } from "@/pages/legal/shared";
import { useWellness } from "@/hooks/use-wellness";
import { useEffect, useState } from "react";
import { Link } from "react-router";

/**
 * Indian law (DPDP Act 2023) requires demonstrable, informed consent before
 * processing personal data. This gate shows once per accepted version.
 */
export function ConsentGate({ children }: { children: React.ReactNode }) {
  const { consent, recordConsent } = useWellness();
  const [accepted, setAccepted] = useState(false);
  const [checked, setChecked] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (consent !== null) {
      setAccepted(
        consent.termsVersion === TERMS_VERSION && consent.privacyVersion === PRIVACY_VERSION,
      );
    }
  }, [consent]);

  if (accepted) return <>{children}</>;

  const accept = async () => {
    setSaving(true);
    try {
      await recordConsent({ termsVersion: TERMS_VERSION, privacyVersion: PRIVACY_VERSION });
      setAccepted(true);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg border border-border p-6 sm:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Before you continue
        </p>
        <h1 className="mt-3 text-2xl font-medium tracking-tight">
          Privacy &amp; terms, in short
        </h1>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground" aria-hidden />
            Your mood logs, journal entries and assessment answers are private
            to your account. We never sell data or use it for advertising.
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground" aria-hidden />
            This service is not medical advice and cannot respond to
            emergencies. In a crisis, call <a href="tel:14416" className="font-medium underline">14416</a> or{" "}
            <a href="tel:112" className="font-medium underline">112</a>.
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground" aria-hidden />
            You can delete anything you write here at any time, and your whole
            account data on request (DPDP Act, 2023 rights).
          </li>
        </ul>
        <label className="mt-8 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-1 size-4 shrink-0 accent-foreground"
          />
          <span className="text-sm leading-relaxed">
            I have read and accept the{" "}
            <Link to="/terms" target="_blank" className="font-medium underline underline-offset-4">
              Terms &amp; Conditions
            </Link>{" "}
            and{" "}
            <Link to="/privacy" target="_blank" className="font-medium underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            (v{TERMS_VERSION}).
          </span>
        </label>
        <button
          type="button"
          disabled={!checked || saving}
          onClick={accept}
          className="mt-6 w-full border border-foreground bg-foreground py-3 text-sm font-medium text-background transition-opacity disabled:opacity-40"
        >
          {saving ? "Recording…" : "Accept and continue"}
        </button>
      </div>
    </div>
  );
}
