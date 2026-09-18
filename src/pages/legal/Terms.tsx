import { LegalShell, Section } from "./shared";

export default function Terms() {
  return (
    <LegalShell title="Terms & Conditions">
      <Section n={1} title="About this service">
        <p>
          “Mental Help” (this “Service”) is an information and self-help
          platform operated in India. It provides directories of Indian crisis
          helplines and NGO services, psychoeducation, screening questionnaires,
          mood tracking, journaling and guided exercises.
        </p>
        <p>
          The Service is <strong>not</strong> a medical device, hospital,
          clinic, pharmacy, ambulance service or emergency-response provider,
          and it is <strong>not</strong> affiliated with any government body or
          with the helplines and NGOs listed.
        </p>
      </Section>

      <Section n={2} title="No doctor–patient relationship; not medical advice">
        <p>
          Nothing on this Service — including screening results (PHQ-9, GAD-7),
          articles, exercises or journaling prompts — constitutes medical
          advice, diagnosis or treatment. Screening tools indicate
          <strong> likelihood ranges</strong> based on published scoring; they
          cannot and do not diagnose any condition. Only a qualified medical
          professional who has examined you can diagnose or treat you.
        </p>
        <p>
          Your use of this Service does not create a doctor–patient
          relationship with us or with any professional listed on it.
        </p>
      </Section>

      <Section n={3} title="Emergencies">
        <p>
          This Service <strong>cannot</strong> respond to emergencies, calls or
          messages. If you are thinking of harming yourself or someone else, or
          a life is at risk:
        </p>
        <ul className="list-disc pl-5">
          <li>Call <strong>Tele-MANAS 14416</strong> or <strong>KIRAN 1800-599-0019</strong> (free, 24×7);</li>
          <li>Call the national emergency number <strong>112</strong> / ambulance <strong>108</strong>; or</li>
          <li>Go to the nearest hospital emergency department.</li>
        </ul>
        <p>
          Helpline numbers and hours are published in good faith and may change
          without notice. We do not guarantee that any listed helpline will
          answer, and we are not responsible for the conduct or availability of
          any third-party service.
        </p>
      </Section>

      <Section n={4} title="Your account">
        <p>
          You may create an account with an email OTP or an anonymous guest
          profile. You are responsible for keeping access to your device and
          email secure. One account per person; you must be 18 or older to
          create an account (see clause 7 on minors).
        </p>
        <p>
          We may suspend accounts that abuse the Service, attempt to access
          other users' data, or violate these Terms.
        </p>
      </Section>

      <Section n={5} title="Your content and conduct">
        <p>
          Journal entries, mood notes and assessment answers you create remain{" "}
          <strong>yours</strong>. You grant us only the limited technical right
          to store and display them back to you as part of running the Service.
          We do not sell your content or use it to advertise to you.
        </p>
        <p>You agree not to:</p>
        <ul className="list-disc pl-5">
          <li>store unlawful content, including content that harasses or incites harm against others;</li>
          <li>use the Service to provide medical advice to others;</li>
          <li>scrape, reverse-engineer, or disrupt the Service.</li>
        </ul>
      </Section>

      <Section n={6} title="No liability">
        <p>
          To the maximum extent permitted by law (including the Indian Contract
          Act, 1872), the Service is provided “as is” and “as available”
          without warranties of any kind. To the extent permitted under
          applicable law, the operators of the Service are not liable for any
          indirect, incidental or consequential loss — including emotional
          distress, loss of data, or outcomes arising from reliance on
          information here, or from the acts or omissions of third-party
          helplines, NGOs or professionals listed on the Service.
        </p>
        <p>
          Nothing in these Terms limits liability that cannot be limited under
          Indian law.
        </p>
      </Section>

      <Section n={7} title="Minors">
        <p>
          The Service is directed at adults. If you are under 18, please use it
          only with the involvement and consent of a parent or guardian, and
          speak to a trusted adult or a helpline about anything affecting your
          safety. We do not knowingly create accounts for children; if we learn
          that a registered user is under 18 without guardian consent, we may
          delete the account and its data.
        </p>
      </Section>

      <Section n={8} title="Termination">
        <p>
          You may stop using the Service and request deletion of your account
          and personal data at any time (see the Privacy Policy). We may
          discontinue or change the Service; if we do, we will give reasonable
          notice where practicable.
        </p>
      </Section>

      <Section n={9} title="Governing law and jurisdiction">
        <p>
          These Terms are governed by the laws of India. Subject to clause 10,
          courts in India have exclusive jurisdiction over disputes arising
          from these Terms or the Service.
        </p>
      </Section>

      <Section n={10} title="Grievance officer (required under Indian law)">
        <p>
          Under the Information Technology Act, 2000 and the Information
          Technology (Intermediary Guidelines and Digital Media Ethics Code)
          Rules, 2021, we designate a Grievance Officer to receive complaints
          about the Service, including any content or data concerns:
        </p>
        <p>
          <strong>Grievance Officer — Mental Help</strong>
          <br />
          Email: <span className="text-foreground">grievance@mentalhelp.example</span>
          <br />
          Response time: within 30 days of receiving a complaint (we aim for 72 hours).
        </p>
      </Section>

      <Section n={11} title="Changes to these Terms">
        <p>
          We may update these Terms. The version number and “last updated” date
          at the top change when we do, and material changes will be highlighted
          in the app. Continued use after an update means you accept the updated
          Terms.
        </p>
      </Section>
    </LegalShell>
  );
}
