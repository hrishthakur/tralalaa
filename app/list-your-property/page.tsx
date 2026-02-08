import PartnerForm from "@/components/partner-form";
import {
  CalendarDays,
  Users,
  Wallet,
  ShieldCheck,
  Quote,
} from "lucide-react";
import { SITE_CONFIG } from '@/lib/site';

export const metadata = {
  title: `List Your Property | Partner with ${SITE_CONFIG.name}`,
  description:
    `Partner with ${SITE_CONFIG.name} to host long-term remote professionals. Stable occupancy, verified guests, and work-ready standards.`,
};

export default function ListYourPropertyPage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative bg-muted">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Partner with us
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-light leading-tight">
              List your property for
              <br />
              long-term remote stays
            </h1>

            <p className="mt-6 text-lg max-w-2xl">
              We work with property owners who value stability, care,
              and professional guests over short-term tourist churn.
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-5">
              <a
                href="#partner-form"
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  bg-primary
                  px-10 py-4
                  text-sm font-medium
                  text-primary-foreground
                  shadow-md
                  hover:brightness-110
                  transition
                "
              >
                Apply to partner
              </a>

              <span className="text-sm text-muted-foreground">
                No obligation · Reviewed within 24 hours
              </span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================= WHY PARTNER ================= */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Why partner with us
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              A better model for property owners
            </h2>

            <p className="mt-4">
              {SITE_CONFIG.name} focuses on fewer bookings, longer stays,
              and guests who treat your property like a home —
              not a hotel room.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <Benefit
              icon={CalendarDays}
              title="Long-term occupancy"
              description="Guests stay for weeks or months, reducing vacancy gaps and operational overhead."
            />
            <Benefit
              icon={Users}
              title="Verified professionals"
              description="Remote employees and founders who value quiet, cleanliness, and reliability."
            />
            <Benefit
              icon={Wallet}
              title="Predictable income"
              description="Stable pricing and longer stays lead to consistent monthly earnings."
            />
            <Benefit
              icon={ShieldCheck}
              title="Selective onboarding"
              description="We carefully onboard properties to maintain long-term quality."
            />
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="section bg-muted">
        <div className="max-w-5xl mx-auto px-6">
          <div className="card max-w-3xl mx-auto text-center">
            <Quote className="mx-auto h-6 w-6 text-muted-foreground" />
            <p className="mt-6 text-lg leading-relaxed">
              “Hosting remote professionals has been far more stable
              than tourist bookings. Guests stay longer, respect the
              space, and the income is predictable month to month.”
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              — Property host, Himachal Pradesh
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================= HOW IT WORKS ================= */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Process
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              How the partnership works
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-10">
            <Step
              number="01"
              title="Share your details"
              description="Tell us about your property, location, connectivity, and availability."
            />
            <Step
              number="02"
              title="Property review"
              description="We review suitability for long-term remote stays and work-readiness."
            />
            <Step
              number="03"
              title="Get listed"
              description="Once approved, your property goes live for qualified professionals."
            />
            <Step
              number="04"
              title="Receive enquiries"
              description="Get booking requests aligned with your pricing and availability."
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================= NOT A FIT ================= */}
      <section className="section bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">
              This partnership may not be a fit if
            </h2>

            <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
              <li>• Your property is primarily for parties or short-term tourism</li>
              <li>• Internet connectivity is unreliable or unavailable</li>
              <li>• You prefer nightly, high-turnover bookings</li>
              <li>• The space isn’t suitable for residential living</li>
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================= FORM ================= */}
      <section id="partner-form" className="section bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-wide text-muted-foreground">
            Get started
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Apply to list your property
          </h2>

          <p className="mt-4 max-w-xl mx-auto">
            Share a few details and our team will review your property
            for suitability within 24 hours.
          </p>

          <div className="mt-14 card text-left">
            <PartnerForm />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= SUB COMPONENTS ================= */

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="h-px bg-border" />
    </div>
  );
}

function Benefit({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div>
      <Icon className="h-6 w-6 text-primary" />
      <h3 className="mt-4 text-lg font-medium">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card">
      <span className="text-xs font-medium text-muted-foreground">
        {number}
      </span>
      <h3 className="mt-3 text-lg font-medium">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
