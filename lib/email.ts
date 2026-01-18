import { Resend } from "resend";
import type { BookingLead } from "./notify";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAdminEmail(data: BookingLead) {
  if (!process.env.ADMIN_EMAIL) {
    throw new Error("ADMIN_EMAIL is not configured");
  }

  const res = await resend.emails.send({
    from: "Remote Work Stays <onboarding@resend.dev>",
    to: process.env.ADMIN_EMAIL,
    subject: "New Booking Request",
    html: `
      <h2>New Booking Request</h2>

      <p><strong>Name:</strong> ${escape(data.name)}</p>
      <p><strong>Phone:</strong> ${escape(data.phone)}</p>
      <p><strong>Email:</strong> ${escape(data.email || "N/A")}</p>

      <hr />

      <p><strong>Property:</strong> ${escape(data.propertyName || "N/A")}</p>
      <p><strong>Location:</strong> ${escape(data.location || "N/A")}</p>
      <p><strong>Dates:</strong> ${escape(data.arrival || "")} → ${escape(
      data.departure || ""
    )}</p>
      <p><strong>Guests:</strong> ${data.guests ?? "N/A"}</p>
      <p><strong>Nights:</strong> ${data.nights ?? "N/A"}</p>

      <hr />

      <p><strong>Message:</strong></p>
      <p>${escape(data.message || "-")}</p>
    `,
  });

  if (res.error) {
    throw new Error(`Resend error: ${res.error.message}`);
  }

  return res;
}

/**
 * Minimal HTML escaping to avoid broken markup / injection
 */
function escape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
