import { LegalShell, Section } from "./shared";

export default function Privacy() {
  return (
    <LegalShell title="Privacy Policy">
      <Section n={1} title="Who we are and what this covers">
        <p>
          This Privacy Policy explains how “Mental Help” (the “Service”)
          collects, uses, stores and protects your personal data when you use
          our website and account features. It is drafted to comply with the{" "}
          <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the{" "}
          <strong>Information Technology Act, 2000</strong> and its rules
          (including the reasonable-security practices for sensitive personal
          data), and it respects the confidentiality principles of the{" "}
          <strong>Mental Healthcare Act, 2017</strong>.
        </p>
      </Section>

      <Section n={2} title="What we collect">
        <ul className="list-disc pl-5">
          <li>
            <strong>Account data:</strong> your email address (for sign-in OTP)
            or an anonymous guest identifier. We do not ask for your name,
            phone number, address or Aadhaar.
          </li>
          <li>
            <strong>Wellness data you create:</strong> mood check-ins, journal
            entries, and self-assessment (PHQ-9/GAD-7) answers and scores.
          </li>
          <li>
            <strong>Consent records:</strong> which version of the Terms and
            this Policy you accepted and when (required by the DPDP Act).
          </li>
          <li>
            <strong>Basic technical logs</strong> needed to operate and secure
            the Service (e.g. request logs kept by our hosting providers).
          </li>
        </ul>
        <p>
          We do not run advertising trackers, and we do not sell your personal
          data to anyone, ever.
        </p>
      </Section>

      <Section n={3} title="Why we process your data (purpose limitation)">
        <p>
          Under the DPDP Act we may process your data only for the purposes you
          consented to. We use it to:
        </p>
        <ul className="list-disc pl-5">
          <li>authenticate you and keep your account secure;</li>
          <li>show you your own mood history, journal and assessment results;</li>
          <li>record your legal consents;</li>
          <li>maintain the security and functioning of the Service.</li>
        </ul>
        <p>
          We do <strong>not</strong> use your wellness data for advertising, for
          profiling you to third parties, or for any purpose incompatible with
          the above. Mental-health information deserves the highest care.
        </p>
      </Section>

      <Section n={4} title="Your rights (DPDP Act, 2023)">
        <p>As a Data Principal under the DPDP Act, you can:</p>
        <ul className="list-disc pl-5">
          <li><strong>Access</strong> a summary of the personal data we hold about you;</li>
          <li><strong>Correct</strong> inaccurate personal data;</li>
          <li><strong>Erase</strong> your personal data — delete any journal entry or mood log yourself in the app, or email us to erase everything;</li>
          <li><strong>Withdraw consent</strong> at any time, without affecting the lawfulness of earlier processing — withdrawing stops new data collection;</li>
          <li><strong>Nominate</strong> another individual to exercise your rights if you die or become incapable.</li>
        </ul>
        <p>
          To exercise any right, use the in-app deletion tools or email the
          contact in clause 10. We will respond within 30 days.
        </p>
      </Section>

      <Section n={5} title="Sensitive data handled with extra care">
        <p>
          Mood, journal and screening data is health-related and sensitive. We
          apply heightened protections: it is stored scoped to your account,
          transmitted over TLS, never displayed to other users, never used for
          advertising, and never shared with helplines, NGOs, employers,
          insurers or family members. The helplines listed on the Service are
          independent; when you call them, <strong>their</strong> privacy rules
          apply to that conversation, not this Policy.
        </p>
      </Section>

      <Section n={6} title="Who we share with (processors)">
        <p>
          We use a small number of service providers to run the Service
          (authentication, database hosting, email delivery for OTP codes).
          They process data only on our instructions, under contract, and are
          bound to equivalent protections. We may disclose data only if
          required by Indian law — for example, a lawful order from a court or
          competent authority — or to prevent a serious and imminent threat to
          life, to the extent permitted by law.
        </p>
      </Section>

      <Section n={7} title="Security">
        <p>
          We follow reasonable security practices consistent with the IT
          (Reasonable Security Practices and Procedures and Sensitive Personal
          Data or Information) Rules, 2011: TLS encryption in transit,
          access-controls, and scoped storage. No system is perfectly secure;
          if a breach affecting your data occurs, we will notify you and the
          Data Protection Board as required by law.
        </p>
      </Section>

      <Section n={8} title="Retention and deletion">
        <p>
          Wellness data is retained while your account is active so you can
          see your history. When you delete an entry, it is removed from the
          production database. When you ask us to erase your account data, we
          delete it from production systems within 30 days, except copies we
          must keep for legal compliance (e.g. consent audit records, which we
          keep in a form that cannot identify your wellness content).
        </p>
      </Section>

      <Section n={9} title="Children's data">
        <p>
          The Service is not directed at children under 18. Under the DPDP Act,
          we do not process children's data without verifiable parental
          consent. If we learn a child has created an account without such
          consent, we will delete it.
        </p>
      </Section>

      <Section n={10} title="Data Protection Officer / Grievance Officer">
        <p>
          Under the DPDP Act and IT Act rules, our grievance contact is:
        </p>
        <p>
          <strong>Grievance Officer — Mental Help</strong>
          <br />
          Email: <span className="text-foreground">mh.author324@passfwd.com</span>
          <br />
          We acknowledge complaints within 72 hours and resolve them within 30 days.
        </p>
      </Section>

      <Section n={11} title="Changes to this Policy">
        <p>
          We update this Policy when our practices change; the version and date
          at the top reflect the current one. If a change is material, we will
          ask for fresh consent in the app before processing data under it.
        </p>
      </Section>
    </LegalShell>
  );
}
