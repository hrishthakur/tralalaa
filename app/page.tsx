import BookingBar from "@/components/booking-bar";
import PropertyCard from "@/components/property-card";
import FeatureCard from "@/components/feature-card";
import { properties } from "@/data/properties";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Wifi,
  Home as HomeIcon,
  MapPin,
  Receipt,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ================= SEARCH / HERO ================= */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Remote work,
              <br />
              designed for long mountain stays
            </h1>

            <p className="mt-6 text-lg max-w-2xl">
              Purpose-built homes in calm mountain towns, created for
              professionals who need focus, stability, and reliable
              infrastructure for everyday work.
            </p>
          </div>

          {/* Booking Bar as Primary Surface */}
          <div className="mt-16 max-w-4xl">
            <Card>
              <CardContent className="p-4">
                <BookingBar />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================= WHY US ================= */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="px-0">
              <p className="text-sm uppercase tracking-wide text-muted-foreground">
                Why Remote Work Stays
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

/* ================= SUB COMPONENT ================= */

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <Separator />
    </div>
  );
}
