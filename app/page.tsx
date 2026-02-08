import BookingBar from '@/components/booking-bar';
import PropertyCard from '@/components/property-card';
import FeatureCard from '@/components/feature-card';
import { properties } from '@/data/properties';
import {
  Card,
  CardHeader,
  CardContent,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Wifi,
  Home as HomeIcon,
  MapPin,
  Receipt,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site';

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="
          relative
          min-h-[85vh]
          flex items-center
          bg-cover bg-center
          bg-fixed
        "
        style={{
          backgroundImage: "url('/images/background.png')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20" />

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          {/* Headline block */}
          <div className="max-w-3xl text-white backdrop-blur-sm bg-black/30 rounded-2xl p-8 md:p-10">
            {/* Brand */}
            <p className="mb-4 text-sm uppercase tracking-widest text-white/80">
              {SITE_CONFIG.name}
            </p>

            {/* Value proposition */}
            <h1
              className="
                text-5xl md:text-6xl
                font-serif
                font-medium
                leading-tight
                text-white
              "
            >
              Designed for long
              <br />
              mountain stays
            </h1>

            {/* Supporting copy */}
            <p className="mt-6 text-lg max-w-2xl text-white/85 font-sans">
              Purpose-built homes in calm mountain towns, created for professionals
              who need focus, stability, and reliable infrastructure for everyday work.
            </p>
          </div>

          {/* Booking Bar */}
          <div className="mt-20 max-w-4xl animate-fade-up">
            <Card className="bg-white/95 backdrop-blur-md shadow-xl">
              <CardContent className="p-4">
                <BookingBar />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 text-xs">
          <span className="mb-2">Scroll</span>
          <div className="h-6 w-px bg-white/50 animate-pulse" />
        </div>
      </section>

      <SectionDivider />

      {/* ================= WHY US ================= */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="px-0">
              <p className="text-sm uppercase tracking-wide text-muted-foreground">
                Why {SITE_CONFIG.name}
              </p>

              <h2 className="mt-2 text-3xl font-semibold max-w-2xl">
                Built for people who actually need to work
              </h2>

              <p className="mt-4 max-w-2xl">
                These are not vacation rentals or short-term getaways.
                Every stay is evaluated for livability, comfort,
                and long-term work suitability.
              </p>
            </CardHeader>

            <CardContent className="px-0">
              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard
                  icon={Wifi}
                  title="Work-ready infrastructure"
                  description="Verified Wi-Fi, power backup, and work-friendly layouts — no compromises."
                />
                <FeatureCard
                  icon={HomeIcon}
                  title="Designed for long stays"
                  description="Homes with kitchens, storage, and layouts that work for weeks or months."
                />
                <FeatureCard
                  icon={MapPin}
                  title="Quiet, livable locations"
                  description="Mountain towns selected for calm, safety, and everyday living."
                />
                <FeatureCard
                  icon={Receipt}
                  title="Transparent pricing"
                  description="Clear, honest pricing with no hidden fees or surprises."
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <SectionDivider />

      {/* ================= LOCATIONS ================= */}
      <section className="section bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="px-0 mb-6">
              <p className="text-sm uppercase tracking-wide text-muted-foreground">
                Locations
              </p>

              <h2 className="mt-2 text-3xl font-semibold">
                Available destinations
              </h2>

              <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
                A limited, intentional set of destinations suited for long-term stays
              </p>
            </CardHeader>

            <CardContent className="px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {properties.slice(0, 6).map((p) => (
                  <PropertyCard key={p.slug} property={p} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

/* ================= SUB ================= */

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <Separator />
    </div>
  );
}
