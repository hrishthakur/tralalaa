import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { packages } from "@/data/packages";
import { SITE_CONFIG } from "@/lib/site";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const pkg = packages.find((p) => p.slug === params.slug);
  if (!pkg) return {};

  return {
    title: pkg.seo.metaTitle,
    description: pkg.seo.metaDescription,
    keywords: pkg.seo.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/packages/${pkg.slug}`,
    },
  };
}

export default function PackageDetailPage({ params }: Props) {
  const pkg = packages.find((p) => p.slug === params.slug);
  if (!pkg) return notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.description,
    offers: {
      "@type": "Offer",
      price: pkg.price,
      priceCurrency: pkg.currency,
    },
  };

  return (
    <main className="bg-white">
      <Script
        id="package-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HERO */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src={pkg.coverImage}
          alt={pkg.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {pkg.title}
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              {pkg.tagline}
            </p>
            <p className="mt-6 text-xl font-semibold text-white">
              ₹{pkg.price.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-lg text-gray-700 leading-relaxed">
          {pkg.description}
        </p>
      </section>

      {/* HIGHLIGHTS */}
      {/* EXPERIENCE HIGHLIGHTS */}
<section className="relative py-28 bg-gradient-to-b from-white to-neutral-100">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold tracking-tight">
        Experience Highlights
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Carefully curated experiences designed for balance, depth, and
        authentic immersion beyond tourism.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {pkg.highlights.map((item, i) => (
        <div
          key={i}
          className="group relative rounded-3xl bg-white p-8 shadow-sm border border-neutral-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white text-xl">
              ✦
            </div>
            <p className="text-gray-800 font-medium leading-relaxed">
              {item}
            </p>
          </div>

          <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 pointer-events-none" />
        </div>
      ))}
    </div>
  </div>
</section>


    {/* WORK INFRASTRUCTURE */}
<section className="relative py-32 bg-neutral-50 overflow-hidden">
  {/* Soft ambient gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-neutral-100 pointer-events-none" />

  <div className="relative max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="max-w-3xl mb-20">
      <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4">
        Work Infrastructure
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-neutral-900">
        Designed for Deep Focus
      </h2>

      <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
        Our mountain spaces are structured to support uninterrupted work,
        stable connectivity, and intentional quiet — without losing the
        essence of immersive living.
      </p>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Connectivity */}
      <div className="rounded-3xl bg-white p-10 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
          Connectivity
        </div>

        <p className="text-3xl font-semibold text-neutral-900 tracking-tight">
          {pkg.workFriendly.wifiSpeed}
        </p>

        <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
          Dedicated high-speed broadband suitable for video calls,
          collaborative workflows, and sustained cloud-based tasks.
        </p>
      </div>

      {/* Workspace */}
      <div className="rounded-3xl bg-white p-10 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
          Workspace
        </div>

        <p className="text-3xl font-semibold text-neutral-900 tracking-tight">
          {pkg.workFriendly.coworkingAccess
            ? "Dedicated Coworking"
            : "Private Workspaces"}
        </p>

        <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
          Ergonomic seating and structured layouts designed for
          distraction-free productivity.
        </p>
      </div>

      {/* Reliability */}
      <div className="rounded-3xl bg-white p-10 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
          Reliability
        </div>

        <p className="text-3xl font-semibold text-neutral-900 tracking-tight">
          {pkg.workFriendly.powerBackup ? "Power Secured" : "Standard Supply"}
        </p>

        <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
          Backup systems ensure continuity even during regional
          fluctuations.
        </p>
      </div>

      {/* Quiet Protocol */}
      <div className="rounded-3xl bg-white p-10 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
          Quiet Protocol
        </div>

        <p className="text-xl font-semibold text-neutral-900 leading-snug">
          {pkg.workFriendly.quietHours}
        </p>

        <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
          Dedicated silent work periods allow uninterrupted deep focus
          throughout the day.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ITINERARY */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Sample Itinerary
          </h2>

          <div className="space-y-8">
            {pkg.itinerary.map((day, i) => (
              <div key={i} className="border-l-4 border-black pl-6">
                <h3 className="font-semibold text-lg">{day.day}</h3>
                <p className="font-medium">{day.title}</p>
                <p className="text-gray-600 mt-2">{day.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDES / EXCLUDES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">What's Included</h2>
            <ul className="space-y-3">
              {pkg.includes.map((item, i) => (
                <li key={i} className="text-gray-700">✔ {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Not Included</h2>
            <ul className="space-y-3">
              {pkg.excludes.map((item, i) => (
                <li key={i} className="text-gray-700">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Safety & Support
          </h2>
          <p className="text-gray-700">
            Guided Activities: {pkg.safety.guidedActivities ? "Yes" : "No"} |
            Medical Support: {pkg.safety.medicalSupportAvailable ? "Available" : "Not Available"}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Experience This?
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Secure your spot or speak with our team to customize your immersion.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="rounded-full bg-black px-10 py-3 text-white font-semibold hover:bg-neutral-800 transition"
          >
            Enquire Now
          </Link>

          <Link
            href="/packages"
            className="rounded-full border border-black px-10 py-3 font-semibold hover:bg-black hover:text-white transition"
          >
            View Other Packages
          </Link>
        </div>
      </section>
    </main>
  );
}