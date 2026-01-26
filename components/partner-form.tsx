"use client";

import { useForm } from "react-hook-form";
import { sendPartnerNotification, PartnerLead } from "@/lib/partner-notify";

export default function PartnerForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<PartnerLead>({
    mode: "onSubmit",
  });

  async function onSubmit(data: PartnerLead) {
    await sendPartnerNotification(data);
  }

  if (isSubmitSuccessful) {
    return (
      <div className="rounded-xl border bg-green-50 p-6 text-center">
        <h3 className="text-lg font-semibold text-green-700">
          Thanks for reaching out
        </h3>
        <p className="mt-2 text-sm text-green-700">
          Our team will review your property and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      {/* NAME */}
      <input
        {...register("name", { required: true })}
        placeholder="Your full name"
        className="booking-input h-11"
      />

      {/* PHONE */}
      <input
        {...register("phone", { required: true })}
        placeholder="Phone number"
        className="booking-input h-11"
      />

      {/* EMAIL */}
      <input
        {...register("email")}
        type="email"
        placeholder="Email address (optional)"
        className="booking-input h-11"
      />

      {/* LOCATION */}
      <input
        {...register("propertyLocation", { required: true })}
        placeholder="Property location (city / area)"
        className="booking-input h-11"
      />

      {/* INTERNET */}
      <input
        {...register("internet")}
        placeholder="Internet speed / provider (optional)"
        className="booking-input h-11"
      />

      {/* MESSAGE */}
      <textarea
        {...register("message")}
        rows={3}
        placeholder="Anything else we should know?"
        className="booking-input"
      />

      {/* CTA */}
      <button
        disabled={isSubmitting}
        className="booking-cta h-11 w-full disabled:opacity-60"
      >
        {isSubmitting ? "Submitting…" : "Submit property details"}
      </button>

      <p className="text-xs text-center text-slate-500">
        We review each submission manually. No obligations.
      </p>
    </form>
  );
}
