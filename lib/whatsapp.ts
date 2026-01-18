export async function sendAdminWhatsApp(params: {
  name: string;
  phone: string;
  email: string;
  location: string;
  arrival: string;
  departure: string;
}) {
  const res = await fetch(
    `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: process.env.ADMIN_PHONE,
        type: "template",
        template: {
          name: "admin_booking_alert",
          language: { code: "en" },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: params.name },
                { type: "text", text: params.phone },
                { type: "text", text: params.email },
                { type: "text", text: params.location },
                { type: "text", text: params.arrival },
                { type: "text", text: params.departure },
              ],
            },
          ],
        },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`WhatsApp admin notify failed: ${err}`);
  }
}
