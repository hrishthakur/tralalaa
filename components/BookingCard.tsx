'use client';

import { formatINR } from '@/lib/format';

type Props = {
  property: any;
  arrival: string;
  departure: string;
  guests: number;
  setArrival: (v: string) => void;
  setDeparture: (v: string) => void;
  setGuests: (v: number) => void;
  pricing: any;
};

export default function BookingCard({
  property,
  arrival,
  departure,
  guests,
  setArrival,
  setDeparture,
  setGuests,
  pricing,
}: Props) {
  function todayISO() {
    return new Date().toISOString().split('T')[0];
  }

  const isValid =
    arrival &&
    departure &&
    departure > arrival &&
    pricing;

  return (
    <div className="border rounded-2xl p-6 bg-white shadow-sm">

      {pricing && (
  <p className="text-sm text-slate-500 mb-1">
    Starting from
  </p>
)}

{pricing ? (
  <>
          <div className="flex items-baseline gap-3">
            {pricing.savings > 0 && (
              <span className="text-sm text-slate-400 line-through">
                ₹{formatINR(pricing.originalTotal)}
              </span>
            )}
            <span className="text-2xl font-semibold">
              ₹{formatINR(pricing.discountedTotal)}
            </span>
          </div>

          <p className="text-sm text-slate-500">
            ₹{formatINR(pricing.perNight)} / night · {pricing.nights} nights
          </p>

          {pricing.savings > 0 && (
            <p className="text-xs text-green-600 mt-1">
              You save ₹{formatINR(pricing.savings)}
            </p>
          )}
        </>
      ) : (
        <p className="text-sm text-slate-500">
          Select dates to see price
        </p>
      )}

      {/* DATE INPUTS */}
      <div className="mt-4 space-y-3">
        <input
          type="date"
          min={todayISO()}
          value={arrival}
          onChange={e => {
            setArrival(e.target.value);
            if (departure && e.target.value >= departure) {
              setDeparture('');
            }
          }}
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />

        <input
          type="date"
          min={arrival || todayISO()}
          value={departure}
          onChange={e => setDeparture(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />

        <div className="flex justify-between items-center border rounded-lg px-3 py-2">
          <span className="text-sm">Guests</span>
          <div className="flex gap-3 items-center">
            <button onClick={() => setGuests(Math.max(1, guests - 1))}>−</button>
            <span>{guests}</span>
            <button onClick={() => setGuests(guests + 1)}>+</button>
          </div>
        </div>
      </div>

      {/* CTA */}
      {isValid ? (
        <a
          href={`/book/confirm?property=${property.slug}&arrival=${arrival}&departure=${departure}&guests=${guests}`}
          className="block mt-6 w-full text-center bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition"
        >
          Enquire availability
        </a>
      ) : (
        <button
          disabled
          className="block mt-6 w-full text-center bg-slate-200 text-slate-500 py-3 rounded-lg font-medium cursor-not-allowed"
        >
          Select dates
        </button>
      )}

      <p className="mt-3 text-xs text-center text-slate-500">
        You won’t be charged yet
      </p>
    </div>
  );
}
