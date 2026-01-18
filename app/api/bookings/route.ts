import { NextResponse } from "next/server";
import { sendAdminEmail } from "@/lib/email";
import type { BookingLead } from "@/lib/notify";

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as BookingLead;

    const {
      name,
      phone,
      email,
      location,
      arrival,
      departure,
    } = data;

    // Minimal validation (server-side trust boundary)
    if (!name || !phone || !location || !arrival || !departure) {
      return NextResponse.json(
        { error: "Invalid payload" },
        { status: 400 }
      );
    }

    // 📧 ADMIN EMAIL NOTIFICATION
    await sendAdminEmail({
      ...data,
      email: email || "N/A",
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("BOOKING_EMAIL_ERROR", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
