"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { properties } from "@/data/properties";

function todayISO() {
  return new Date().toISOString().split("T")[0];
}

export default function BookingBar() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      location: "",
      arrival: "",
      departure: "",
    },
  });

  const router = useRouter();
  const arrival = watch("arrival");

  const locations = useMemo(() => {
    return Array.from(new Set(properties.map((p) => p.location)));
  }, []);

  useEffect(() => {
    if (!arrival) return;
    const departure = watch("departure");
    if (departure && departure <= arrival) {
      setValue("departure", "");
    }
  }, [arrival, setValue, watch]);

  function onSubmit(data: any) {
    const params = new URLSearchParams({
      location: data.location,
      arrival: data.arrival,
      departure: data.departure,
    });

    router.push(`/book/select?${params.toString()}`);
  }

  const isDisabled = !formState.isValid;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      role="search"
      aria-label="Search available stays"
      className="
        mx-auto
        w-full max-w-5xl
        rounded-2xl
        bg-white
        p-4
        shadow-xl shadow-black/10
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-3
          md:grid-cols-[1.4fr_1fr_1fr_auto]
          md:items-center
        "
      >
        {/* LOCATION */}
        <div>
          <label className="sr-only">Location</label>
          <select
            {...register("location", { required: true })}
            className="booking-input"
          >
            <option value="" disabled>
              Select location
            </option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* ARRIVAL */}
        <div>
          <label className="sr-only">Arrival date</label>
          <input
            {...register("arrival", { required: true })}
            type="date"
            min={todayISO()}
            className="booking-input"
          />
        </div>

        {/* DEPARTURE */}
        <div>
          <label className="sr-only">Departure date</label>
          <input
            {...register("departure", { required: true })}
            type="date"
            min={arrival || todayISO()}
            className="booking-input"
          />
        </div>

        {/* CTA */}
        <button
          type="submit"
          disabled={isDisabled}
          className="booking-cta disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Check availability
        </button>
      </div>
    </form>
  );
}
