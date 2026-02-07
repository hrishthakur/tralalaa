'use client';

export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import LocationClient from './LocationClient';

export default function LocationPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading property…</div>}>
      <LocationClient params={params} />
    </Suspense>
  );
}
