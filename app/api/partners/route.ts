import { NextResponse } from "next/server";
import { sendAdminEmail } from "@/lib/email";
import type { PartnerLead } from "@/lib/partner-notify";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Expecting the same envelope style used elsewhere
    const data: PartnerLead | undefined = body?.payload;

    if (
      !data ||
      !data.name ||
      !data.phone ||
      !data.propertyLocation
    ) {
      return NextResponse.json(
        { error: "Invalid partner enquiry payload" },
        { status: 400 }
      );
    }

    // Send admin notification via Resend
    await sendAdminEmail({
      name: data.name,
      phone: data.phone,
      email: data.email || "N/A",
      message: data.message,

      // Map partner-specific fields into email body
      propertyName: "Partner Property Enquiry",
      location: data.propertyLocation,
      guests: data.rooms,
      nights: undefined,
      arrival: undefined,
      departure: undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("PARTNER_API_ERROR:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
