'use client';

import Script from 'next/script';
import Image from 'next/image';
import { notFound, useSearchParams } from 'next/navigation';
import { useState, useMemo } from 'react';

import { properties } from '@/data/properties';
import { calculatePrice, daysBetween } from '@/lib/pricing';
import { formatINR } from '@/lib/format';
import { SITE_CONFIG } from '@/lib/site';
import BookingCard from '@/components/BookingCard';

/* ================= CLIENT ================= */

export default function LocationClient({
  params,
}: {
  params: { slug: string };
}) {
  const property = properties.find(p => p.slug === params.slug);
  if (!property) return notFound();

  const searchParams = useSearchParams();

  const urlArrival = searchParams.get('arrival') ?? '';
  const urlDeparture = searchParams.get('departure') ?? '';
  const urlGuests = Number(searchParams.get('guests') ?? 1);

  const [arrival, setArrival] = useState(urlArrival);
  const [departure, setDeparture] = useState(urlDeparture);
  const [guests, setGuests] = useState(urlGuests);

  const nights = daysBetween(arrival, departure);
  const pricing = calculatePrice(property, nights, guests);

  const images = useMemo(() => {
    const gallery = property.images.gallery ?? [];
    return [property.images.cover, ...gallery].filter(Boolean);
  }, [property.images]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: property.name,
    description: property.seo.description,
    url: `${SITE_CONFIG.url}/locations/${property.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.location,
      addressCountry: SITE_CONFIG.country,
    },
    amenityFeature: property.amenities.map(a => ({
      '@type': 'LocationFeatureSpecification',
      name: a,
    })),
  };

  function todayISO() {
    return new Date().toISOString().split('T')[0];
  }

  return (
    <>
      <Script
        id="property-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 👇 IMPORTANT: bottom padding so sticky bar is visible */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-10 pb-32">
        {/* TITLE */}
        <header className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight">
            {property.name}
          </h1>
          <p className="mt-1 text-slate-600">
            📍 {property.location}, Himachal Pradesh
          </p>
        </header>

        {/* IMAGE GALLERY */}
        <section className="mb-10">
          <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-[420px]">
            <div className="col-span-2 row-span-2 relative">
              <Image src={images[0]} alt={property.name} fill priority className="object-cover" />
            </div>

            {images.slice(1, 5).map((img, i) => (
              <div key={i} className="relative">
                <Image src={img} alt={`${property.name} photo ${i + 2}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory">
            {images.map((img, i) => (
              <div key={i} className="relative min-w-[85%] h-64 snap-center rounded-xl overflow-hidden">
                <Image src={img} alt={`${property.name} photo ${i + 1}`} fill priority={i === 0} className="object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT + BOOKING */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          <div>
            <h2 className="text-xl font-semibold mb-3">About this stay</h2>
            <p className="text-slate-600 mb-6">{property.content.about}</p>

            {property.content.idealFor?.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mb-3">Ideal for</h3>
                <ul className="grid grid-cols-2 gap-y-2 text-sm text-slate-600 mb-8">
                  {property.content.idealFor.map(i => (
                    <li key={i}>✓ {i}</li>
                  ))}
                </ul>
              </>
            )}

            <h3 className="text-lg font-semibold mb-3">Amenities</h3>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-slate-600 mb-8">
              {property.amenities.map(a => (
                <li key={a}>✓ {a}</li>
              ))}
            </ul>

            {property.highlights?.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mb-3">Why you’ll love this stay</h3>
                <ul className="grid grid-cols-2 gap-y-2 text-sm text-slate-600 mb-8">
                  {property.highlights.map(h => (
                    <li key={h}>✓ {h}</li>
                  ))}
                </ul>
              </>
            )}

            <h3 className="text-lg font-semibold mb-3">Policies</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• {property.policies.cancellation}</li>
              {property.policies.houseRules.map(r => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </div>

          <aside className="hidden lg:block sticky top-24 h-fit">
            <BookingCard
              property={property}
              arrival={arrival}
              departure={departure}
              guests={guests}
              setArrival={setArrival}
              setDeparture={setDeparture}
              setGuests={setGuests}
              pricing={pricing}
            />
          </aside>
        </section>
      </main>

      <MobileStickyBar pricing={pricing} />
    </>
  );
}

/* ================= MOBILE STICKY ================= */

function MobileStickyBar({ pricing }: any) {
  const hasPricing = Boolean(pricing);

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t p-4 flex justify-between items-center z-50">
      <div>
        {hasPricing ? (
          <>
            <p className="text-sm font-semibold">₹{formatINR(pricing.discountedTotal)}</p>
            <p className="text-xs text-slate-500">₹{formatINR(pricing.perNight)} / night</p>
          </>
        ) : (
          <>
            <p className="text-sm font-semibold text-slate-700">Select dates</p>
            <p className="text-xs text-slate-500">Prices shown after dates</p>
          </>
        )}
      </div>

      {hasPricing ? (
        <a href="#booking" className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium">
          Enquire
        </a>
      ) : (
        <button disabled className="bg-slate-200 text-slate-500 px-6 py-2 rounded-lg font-medium">
          Select dates
        </button>
      )}
    </div>
  );
}
