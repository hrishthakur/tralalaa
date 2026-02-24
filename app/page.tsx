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
              Focused work.
              <br />
              Meaningful mountain living.
            </h1>

            {/* Supporting copy */}
            <p className="mt-6 text-lg max-w-2xl text-white/85 font-sans">
              Structured stays in calm mountain towns for professionals who want
              productivity during the week and restoration on the weekend.
              Choose from 3-day retreats, 7-day focus weeks, or 14-day deep resets.
            </p>
            <p className="mt-4 text-sm text-white/70">
              Work normally. Live differently.
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
                Built for professionals who need calm to perform at their best
              </h2>

              <p className="mt-4 max-w-2xl">
                These are not chaotic tourist rentals or random weekend stays.
                Every Bungstays home is selected for livability, stability,
                and a balanced daily rhythm — so you can work without friction
                and rest without needing another vacation afterward.
              </p>
            </CardHeader>

            <CardContent className="px-0">
              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard
                  icon={Wifi}
                  title="Work-ready infrastructure"
                  description="Verified high-speed Wi-Fi, power backup, and ergonomic setups designed for real productivity."
                />
                <FeatureCard
                  icon={HomeIcon}
                  title="Designed for real living"
                  description="Homes with kitchens, storage, privacy, and comfort for stays that last days or weeks."
                />
                <FeatureCard
                  icon={MapPin}
                  title="Quiet, livable locations"
                  description="Calm mountain towns chosen for safety, stability, and everyday life — not party tourism."
                />
                <FeatureCard
                  icon={Receipt}
                  title="Transparent pricing"
                  description="Clear, honest rates with no hidden surprises. Plan confidently from the start."
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <SectionDivider />

      {/* ================= EXPERIENCE OPTIONS ================= */}
<section className="relative py-32 bg-muted/30 overflow-hidden">

  {/* Ambient background depth */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.04),transparent_50%)]" />

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="max-w-3xl mb-20">
      <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
        Curated Mountain Experiences
      </p>

      <h2 className="mt-6 text-5xl font-semibold tracking-tight leading-[1.1]">
        Designed for Every Pace of Reset
      </h2>

      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Structured stays built around clarity, productivity and intentional
        time in the mountains.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">

      {/* 3-Day */}
      <div className="group bg-background rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight">
            3-Day Weekend Retreat
          </h3>
          <p className="text-primary font-medium text-sm">
            Short break. Real reset.
          </p>
        </div>

        <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
          <li>Friday arrival - Sunday departure</li>
          <li>Deep rest in a quiet setting</li>
          <li>Optional yoga & guided hikes</li>
          <li>Digital detox friendly</li>
        </ul>
      </div>

      {/* 7-Day Highlight */}
      <div className="relative bg-background rounded-3xl p-10 shadow-xl border border-primary/20 hover:-translate-y-1 transition-all duration-300">

        <div className="absolute top-6 right-6 text-[10px] tracking-[0.2em] uppercase text-primary font-semibold">
          Most Popular
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight">
            7-Day Focus Week
          </h3>
          <p className="text-primary font-medium text-sm">
            Productive. Restorative. Balanced.
          </p>
        </div>

        <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
          <li>High-speed work infrastructure</li>
          <li>Calm daily rhythm</li>
          <li>Curated weekend experience</li>
          <li>Balanced productivity & wellness</li>
        </ul>
      </div>

      {/* 14-Day */}
      <div className="group bg-background rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight">
            14-Day Deep Reset
          </h3>
          <p className="text-primary font-medium text-sm">
            Clarity. Recovery. Breakthrough.
          </p>
        </div>

        <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
          <li>Sustainable daily routine</li>
          <li>Multiple curated experiences</li>
          <li>Immersive nature setting</li>
          <li>Meaningful mental reset</li>
        </ul>
      </div>

      {/* Custom */}
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-10 shadow-sm border border-dashed border-primary/30 hover:-translate-y-1 transition-all duration-300">

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight">
            Custom Experience
          </h3>
          <p className="text-primary font-medium text-sm">
            Designed around you.
          </p>
        </div>

        <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
          <li>Flexible duration</li>
          <li>Corporate & team retreats</li>
          <li>Personalised activities</li>
          <li>Dedicated planning support</li>
        </ul>
      </div>

    </div>
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
                Calm mountain destinations
              </h2>

              <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
                A limited collection of towns selected for long-stay comfort,
                reliable infrastructure, and peaceful surroundings.
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