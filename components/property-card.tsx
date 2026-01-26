"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { Property } from "@/data/properties";
import {
  MapPin,
  Wifi,
  Zap,
  Briefcase,
} from "lucide-react";

export default function PropertyCard({ property, }: { property: Property; }) {
  const images = [
    property.images.cover,
    ...(property.images.gallery ?? []),
  ];

  const [index, setIndex] = useState(0);

  const startingPrice =
    property.pricing?.[0]?.pricePerDay ?? null;

  function prev(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  }

  function next(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIndex(i => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <Link
      href={`/locations/${property.slug}`}
      aria-label={`View details for ${property.name} in ${property.location}`}
      className="group block focus:outline-none"
    >
      <Card className="overflow-hidden border transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-soft">
        {/* ================= IMAGE ================= */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={images[index]}
            alt={`${property.name} image ${index + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {/* Gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

          {/* WIFI SPEED BADGE */}
          {property.wifiSpeed && (
            <div
              className="
                absolute top-3 right-3
                flex items-center gap-1.5
                rounded-full
                bg-black/65 backdrop-blur
                px-3 py-1
                text-xs font-medium text-white
              "
            >
              <Wifi className="h-3.5 w-3.5" />
              {property.wifiSpeed} Mbps
            </div>
          )}

          {/* IMAGE NAVIGATION */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  hidden group-hover:flex
                  h-8 w-8 items-center justify-center
                  rounded-full bg-white/90 text-foreground
                  shadow-sm backdrop-blur
                "
              >
                ‹
              </button>

              <button
                onClick={next}
                aria-label="Next image"
                className="
                  absolute right-3 top-1/2 -translate-y-1/2
                  hidden group-hover:flex
                  h-8 w-8 items-center justify-center
                  rounded-full bg-white/90 text-foreground
                  shadow-sm backdrop-blur
                "
              >
                ›
              </button>
            </>
          )}

          {/* DOT INDICATORS */}
          {images.length > 1 && (
            <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ================= CONTENT ================= */}
        <CardContent className="p-5">
          {/* TITLE */}
          <h3 className="text-base font-medium leading-snug">
            {property.name}
          </h3>

          {/* LOCATION */}
          <div className="mt-1 flex items-center gap-1.5 text-sm text-foreground/80">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            {property.location}
          </div>

          {/* WORK AMENITIES */}
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Amenity icon={Wifi} label="High-speed WiFi" />
            <Amenity icon={Zap} label="Power backup" />
            <Amenity icon={Briefcase} label="Workspace" />
          </div>

          {/* PRICE */}
          {startingPrice && (
            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-sm text-muted-foreground">
                Starting from
              </span>
              <span className="text-xl font-semibold text-foreground">
                ₹{startingPrice.toLocaleString()}
              </span>
              <span className="text-sm text-muted-foreground">
                / night
              </span>
            </div>
          )}

          {/* FOOTER */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              ✓ No booking fees
            </span>

            <span className="text-sm font-medium text-primary group-hover:underline">
              View details →
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

/* ================= SUB ================= */

function Amenity({
  icon: Icon,
  label,
}: {
  icon: any;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5 text-muted-foreground">
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </div>
  );
}
