"use client";

import { useMemo, useState, useTransition } from "react";
import { PackageType } from "@/data/packages";
import PackageCard from "@/components/package-card";

type Props = {
  packages: PackageType[];
};

export default function PackagesClient({ packages }: Props) {
  const [duration, setDuration] = useState<string>("all");
  const [isPending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    if (duration === "all") return packages;
    return packages.filter((p) => p.duration === duration);
  }, [duration, packages]);

  return (
    <>
      {/* Filter Controls */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {["all", "3-days", "7-days", "14-days", "custom"].map((value) => {
            const active = duration === value;

            return (
              <button
  key={value}
  onClick={() =>
    startTransition(() => setDuration(value))
  }
  className={`relative rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 focus:outline-none ${
    duration === value
      ? "bg-black text-white shadow-lg"
      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
  }`}
>
  {value === "all"
    ? "All"
    : value.replace("-", " ").toUpperCase()}
</button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-10 transition-opacity duration-300 ${
            isPending ? "opacity-40" : "opacity-100"
          }`}
        >
          {filtered.map((pkg) => (
            <div
              key={pkg.slug}
              className="transform transition duration-300 hover:-translate-y-1"
            >
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && !isPending && (
          <div className="text-center py-20 text-gray-500">
            No packages available for this selection.
          </div>
        )}
      </section>
    </>
  );
}