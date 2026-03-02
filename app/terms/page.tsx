import { SITE_CONFIG } from '@/lib/site';

/* ================= METADATA ================= */

export const metadata = {
  title: `Terms of Service`,
  description: `Terms and conditions for using ${SITE_CONFIG.name}, including booking requests, responsibilities, and acceptable use.`,
};

/* ================= PAGE ================= */

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-slate-900">
        Terms of Service
      </h1>

      <p className="mt-6 text-sm text-slate-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mt-12 space-y-10 text-sm text-slate-600 leading-relaxed">
        <Section
          title={`1. About ${SITE_CONFIG.name}`}
          content={`${SITE_CONFIG.name} is a platform that connects remote professionals with work-friendly accommodation providers. We do not own or operate the listed properties unless explicitly stated.`}
        />

        <Section
          title="2. Use of the Website"
          content="By accessing or using our website, you agree to use it only for lawful purposes and in accordance with these terms. You may not misuse the platform or attempt to disrupt its operation."
        />

        <Section
          title="3. Booking Requests"
          content="Submitting a booking request does not guarantee availability. All bookings are subject to confirmation by the property host. No payment is required at the time of submitting a booking request unless explicitly stated."
        />

        <Section
          title="4. Payments"
          content={`Payment terms, if applicable, will be shared after availability is confirmed. ${SITE_CONFIG.name} does not process payments unless clearly specified for a particular booking.`}
        />

        <Section
          title="5. Guest Responsibilities"
          content="Guests are expected to respect the property, adhere to house rules, and maintain a quiet, work-friendly environment. Properties listed on the platform are not intended for parties or disruptive activities."
        />

        <Section
          title="6. Partner Listings"
          content={`Property owners may submit their property details for review. ${SITE_CONFIG.name} reserves the right to approve, reject, or remove listings at its discretion to maintain quality standards.`}
        />

        <Section
          title="7. Intellectual Property"
          content={`All content on this website, including text, branding, and design, is the property of ${SITE_CONFIG.name} and may not be used without prior written permission.`}
        />

        <Section
          title="8. Limitation of Liability"
          content={`${SITE_CONFIG.name} is not liable for any direct or indirect damages arising from stays booked through the platform. Any disputes between guests and hosts must be resolved directly.`}
        />

        <Section
          title="9. Changes to Terms"
          content="We may update these terms from time to time. Continued use of the website after changes indicates acceptance of the revised terms."
        />

        <Section
          title="10. Contact"
          content="If you have any questions about these terms, please contact us via the Contact page."
        />
      </section>
    </main>
  );
}

/* ================= SECTION ================= */

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
