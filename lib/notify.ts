export type BookingLead = {
  name: string;
  phone: string;
  email?: string;
  message?: string;

  propertySlug?: string;
  propertyName?: string;
  location?: string;

  arrival?: string;
  departure?: string;
  guests?: number;
  nights?: number;
};

export async function sendNotification(data: BookingLead) {
  const controller = new AbortController();

  // Safety timeout (10s)
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Booking notification failed: ${error}`);
    }

    return await res.json();
  } finally {
    clearTimeout(timeout);
  }
}
