import type { Metadata } from "next";
import { packages } from "@/data/packages";
import { properties } from "@/data/properties";
import PackagesClient from "./PackagesClient";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work From Mountains Packages | Bungstays",
  description:
    "Professionally curated mountain work immersion packages for remote professionals seeking productivity, community, and authentic local experiences.",
  keywords: [
    "work from mountains",
    "remote work retreat India",
    "mountain coworking stay",
    "workation India",
    "digital nomad India",
  ],
};

export default function PackagesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bungstays Work Packages",
    itemListElement: packages.map((pkg, index) => ({
      "@type": "TouristTrip",
      position: index + 1,
      name: pkg.title,
      description: pkg.shortDescription,
      offers: {
        "@type": "Offer",
        price: pkg.price,
        priceCurrency: pkg.currency,
      },
    })),
  };

  return (
    <main className="bg-white">
      <Script
        id="packages-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HERO */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none  bg-gradient-to-br from-black via-neutral-900 to-neutral-800 opacity-90 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Structured Work. Immersive Living.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            Designed for professionals who want focused workdays and curated
            mountain experiences — not tourist packages.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="rounded-full bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition"
            >
              Plan Custom Package
            </Link>
            <Link
              href="/locations"
              className="rounded-full border border-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition"
            >
              Explore Stays
            </Link>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Productivity Infrastructure
            </h3>
            <p className="text-sm text-gray-600">
              High-speed WiFi, coworking zones, power backup, quiet hours.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Offbeat Local Immersion
            </h3>
            <p className="text-sm text-gray-600">
              Stargazing, forest hikes, fishing, community engagement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Small Curated Groups
            </h3>
            <p className="text-sm text-gray-600">
              Limited participants for meaningful connection.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENT INTERACTIVE SECTION */}
      <PackagesClient packages={packages} />

      {/* PROPERTY CROSS LINK */}
      <section className="bg-neutral-100 py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">
            Hosted Across Premium Mountain Stays
          </h2>
          <p className="mt-4 text-gray-600">
            Our packages are hosted across carefully selected properties in
            peaceful Himalayan locations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            {properties.slice(0, 4).map((p) => (
              <Link
                key={p.slug}
                href={`/locations/${p.slug}`}
                className="underline text-gray-700 hover:text-black"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONVERSION */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold">
          Build Your Own Immersion
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Share your work schedule and interests. We will design a personalized
          mountain immersion tailored to your productivity and lifestyle goals.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-black px-10 py-3 text-white font-semibold hover:bg-neutral-800 transition"
        >
          Start Planning →
        </Link>
      </section>
    </main>
  );
}