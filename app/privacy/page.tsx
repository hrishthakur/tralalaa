import { SITE_CONFIG } from '@/lib/site';

export const metadata = {
  title: `Privacy Policy`,
  description:
    `Learn how ${SITE_CONFIG.name} collects, uses, and protects your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-slate-900">
        Privacy Policy
      </h1>

      <p className="mt-6 text-sm text-slate-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mt-12 space-y-10 text-sm text-slate-600 leading-relaxed">
        <Section
          title="1. Information We Collect"
          content="We collect information you provide directly, such as your name, email address, phone number, booking details, and property information when submitting booking or partner enquiry forms."
        />

        <Section
          title="2. How We Use Your Information"
          content="Your information is used to process booking requests, respond to enquiries, communicate with you, and improve our services. We do not sell your personal data."
        />

        <Section
          title="3. Communication"
          content="We may contact you via email or phone regarding your booking request, enquiry, or partnership submission. We do not send unsolicited marketing emails."
        />

        <Section
          title="4. Data Sharing"
          content="We may share relevant information with property hosts solely for the purpose of facilitating a booking or enquiry. We do not share data with third parties for advertising purposes."
        />

        <Section
          title="5. Data Storage & Security"
          content="We take reasonable measures to protect your personal information. However, no method of transmission over the internet is completely secure."
        />

        <Section
          title="6. Cookies"
          content="Our website may use basic cookies or analytics tools to understand usage patterns and improve performance. These do not track you across other websites."
        />

        <Section
          title="7. Data Retention"
          content="We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law."
        />

        <Section
          title="8. Your Rights"
          content="You may request access to, correction of, or deletion of your personal data by contacting us."
        />

        <Section
          title="9. Changes to This Policy"
          content="We may update this Privacy Policy from time to time. Updates will be reflected on this page."
        />

        <Section
          title="10. Contact Us"
          content="If you have questions about this Privacy Policy or your data, please contact us via the Contact page."
        />
      </section>
    </main>
  );
}

function Section({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div>
      <h2 className="text-lg font-medium text-slate-900">
        {title}
      </h2>
      <p className="mt-3">{content}</p>
    </div>
  );
}
