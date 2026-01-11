export type BookingLead = {
  name: string;
  email: string;
  phone?: string;

  propertySlug?: string;
  propertyName?: string;
  location?: string;

  arrival?: string;
  departure?: string;
  guests?: number;
  nights?: number;

  message?: string;
};

export async function sendNotification(data: BookingLead) {
  await fetch(process.env.NEXT_PUBLIC_NOTIFY_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "BOOKING_ENQUIRY",
      timestamp: new Date().toISOString(),
      payload: data,
    }),
  });
}
