import Link from "next/link";
import Image from "next/image";
import { PackageType } from "@/data/packages";

type Props = {
  pkg: PackageType;
};

export default function PackageCard({ pkg }: Props) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
      aria-labelledby={`package-${pkg.slug}`}
    >
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={pkg.coverImage}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient */}
        <div className="absolute inset-0 pointer-events-none  bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Duration Badge */}
        <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-black backdrop-blur">
          ⏳ {pkg.duration.replace("-", " ")}
        </div>

        {/* Intensity Badge */}
        <div className="absolute top-4 right-4 rounded-full bg-black/80 px-4 py-1 text-xs font-medium text-white backdrop-blur capitalize">
          🔥 {pkg.intensity}
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-6 right-6">
          <h3
            id={`package-${pkg.slug}`}
            className="text-xl font-semibold text-white"
          >
            {pkg.title}
          </h3>
          <p className="mt-1 text-sm text-gray-200 line-clamp-1">
            {pkg.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">
            {pkg.shortDescription}
          </p>

          {/* Highlights */}
          <ul className="mt-4 space-y-2 text-xs text-gray-500">
            {pkg.highlights.slice(0, 3).map((highlight, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Work Friendly Indicators */}
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-600">
            {pkg.workFriendly.coworkingAccess && (
              <span className="flex items-center gap-1">
                💻 Coworking
              </span>
            )}
            {pkg.workFriendly.powerBackup && (
              <span className="flex items-center gap-1">
                ⚡ Power Backup
              </span>
            )}
            <span className="flex items-center gap-1">
              📶 {pkg.workFriendly.wifiSpeed}
            </span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="mt-6 flex items-center justify-between border-t pt-5">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Starting From
            </p>
            <p className="text-lg font-semibold text-gray-900">
              ₹{pkg.price.toLocaleString("en-IN")}
            </p>
            {pkg.priceIncludesStay && (
              <p className="text-xs text-gray-500">
                Includes stay
              </p>
            )}
          </div>

          <Link
            href={`/packages/${pkg.slug}`}
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label={`View details for ${pkg.title}`}
          >
            View Details →
          </Link>
        </div>
      </div>
    </article>
  );
}