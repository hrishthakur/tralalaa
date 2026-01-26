"use client";

import Link from "next/link";

export default function MobileMenu({
  close,
}: {
  close: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={close}
      />

      {/* PANEL */}
      <div
        className="
          relative
          h-full w-full
          bg-background
          flex flex-col
          animate-in slide-in-from-top duration-300
        "
      >
        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between px-6 h-16 border-b">
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold">
              Remote Work Stays
            </span>
            <span className="text-xs text-muted-foreground">
              Work-ready mountain stays
            </span>
          </div>

          <button
            onClick={close}
            aria-label="Close menu"
            className="
              h-10 w-10
              rounded-lg
              border
              text-xl
              hover:bg-muted
              transition
            "
          >
            ✕
          </button>
        </div>

        {/* ================= NAV ================= */}
        <nav className="flex-1 px-6 py-10">
          <ul className="space-y-6 text-lg">
            <MobileLink href="/vision" onClick={close}>
              Vision
            </MobileLink>

            <MobileLink href="/locations" onClick={close}>
              Locations
            </MobileLink>

            <MobileLink href="/faq" onClick={close}>
              FAQs
            </MobileLink>

            <MobileLink href="/contact" onClick={close}>
              Contact
            </MobileLink>
          </ul>
        </nav>

        {/* ================= CTA ================= */}
        <div className="px-6 py-6 border-t">
          <Link
            href="/list-your-property"
            onClick={close}
            className="
              block w-full
              rounded-xl
              bg-primary
              text-primary-foreground
              text-center
              py-4
              font-medium
              shadow-soft
              hover:brightness-105
              transition
            "
          >
            List your property
          </Link>

          <p className="mt-3 text-xs text-center text-muted-foreground">
            Partner with us for work-ready stays
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================= SUB ================= */

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="
          block
          text-foreground
          hover:text-primary
          transition
        "
      >
        {children}
      </Link>
    </li>
  );
}
