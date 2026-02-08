import { properties } from "@/data/properties";
import PropertyCard from "@/components/property-card";
import { SITE_CONFIG } from '@/lib/site';

export const metadata = {
  title: `Locations | ${SITE_CONFIG.name}`,
  description:
    "Explore remote-work friendly stays across beautiful mountain locations. High-speed WiFi, long stays, and peaceful environments.",
};

export default function LocationsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      {/* PAGE HEADER */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Explore our locations
        </h1>

        <p className="mt-3 max-w-2xl mx-auto text-slate-600">
          Handpicked mountain stays designed for remote professionals —
          reliable Wi-Fi, comfortable workspaces, and long-stay friendly pricing.
        </p>
      </header>

      {/* LOCATIONS GRID */}
      <section
        className="
          grid gap-8
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {properties.map(property => (
          <PropertyCard
            key={property.slug}
            property={property}
          />
        ))}
      </section>
    </main>
  );
}
