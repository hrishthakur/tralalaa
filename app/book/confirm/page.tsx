'use client';

export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import BookingConfirmClient from './BookingConfirmClient';

export default function BookingConfirmPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading booking details…</div>}>
      <BookingConfirmClient />
    </Suspense>
  );
}
