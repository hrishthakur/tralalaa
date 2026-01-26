export type PartnerLead = {
  name: string;
  phone: string;
  email?: string;

  propertyLocation: string;
  rooms?: number;
  internet?: string;

  message?: string;
};

export async function sendPartnerNotification(data: PartnerLead) {
  const res = await fetch("/api/partners", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      type: "PARTNER_ENQUIRY",
      timestamp: new Date().toISOString(),
      payload: data,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Partner enquiry failed: ${error}`);
  }

  return res.json();
}
