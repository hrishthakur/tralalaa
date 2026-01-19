import BookingBar from "@/components/booking-bar";
import PropertyCard from "@/components/property-card";
import { properties } from "@/data/properties";

export default function Home() {
  return (
    <>
      {/* HERO */}
<section className="relative overflow-hidden bg-slate-900 text-white">
  {/* Subtle gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />

  <div className="relative max-w-7xl mx-auto px-6 py-24">
    <div className="max-w-3xl">
      <h1 className="text-5xl md:text-6xl font-light leading-tight text-white">
        Remote work,
        <br />
        <span className="text-slate-300">
          designed for the mountains
        </span>
      </h1>

      <p className="mt-6 text-lg text-slate-300 max-w-2xl">
        Purpose-built stays with reliable Wi-Fi, power backup,
        and calm environments — so you can work without compromise.
      </p>
    </div>

    {/* Booking bar wrapper (visual polish only) */}
    <div className="mt-10 max-w-4xl">
      <div className="rounded-2xl bg-white/95 backdrop-blur shadow-lg shadow-black/20 p-2">
        <BookingBar />
      </div>
    </div>

    <p className="mt-4 text-sm text-slate-400">
      Trusted by remote professionals working from the Himalayas
    </p>
  </div>
</section>


      {/* WHY US */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold">
            Built for people who actually need to work
          </h2>
          <p className="mt-4 text-slate-600">
            Not vacation rentals. Not co-working gimmicks.
            Homes designed for long, focused remote work.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <Feature
            title="Work-ready infrastructure"
            description="Verified high-speed Wi-Fi, power backup, and proper workspaces — not café internet."
          />
          <Feature
            title="Designed for long stays"
            description="Comfortable homes with kitchens, storage, and pricing optimized for weeks or months."
          />
          <Feature
            title="Quiet, livable locations"
            description="Selected for calm, safety, and everyday livability — away from tourist chaos."
          />
          <Feature
            title="Clear, honest pricing"
            description="No hidden fees. Transparent nightly and monthly pricing with taxes included."
          />
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="mb-14">
            <h2 className="text-3xl font-semibold">
              Available locations
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Carefully selected mountain towns — limited, intentional, livable
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.slice(0, 6).map((p) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ================== SUB COMPONENTS ================== */

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3 className="text-lg font-medium text-slate-900">
        {title}
      </h3>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
