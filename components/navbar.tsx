"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import { SITE_CONFIG } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/80 backdrop-blur
        border-b border-border
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          
          {/* ================= BRAND ================= */}
          <Link
            href="/"
            className="group flex items-center"
          >
            {SITE_CONFIG.logo?.src && (
              <Image
                src={SITE_CONFIG.logo.src}
                alt={SITE_CONFIG.logo.alt}
                width={SITE_CONFIG.logo.width}
                height={SITE_CONFIG.logo.height}
                priority
                className="object-contain"
              />
            )}

            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold tracking-tight">
                {SITE_CONFIG.name}
              </span>
              <span className="hidden sm:block text-xs text-muted-foreground group-hover:text-foreground transition">
                {SITE_CONFIG.tagline}
              </span>
            </div>
          </Link>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
            className="
              md:hidden
              inline-flex items-center justify-center
              h-10 w-10 rounded-lg
              border border-border
              text-lg
              hover:bg-muted
              transition
            "
          >
            ☰
          </button>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <NavLink href="/vision">Vision</NavLink>
            <NavLink href="/locations">Locations</NavLink>
            <NavLink href="/faq">FAQs</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            <Link
              href="/list-your-property"
              className="
                ml-2
                inline-flex items-center
                rounded-full
                px-5 py-2
                text-sm font-medium
                text-primary-foreground
                bg-primary
                shadow-soft
                hover:brightness-105
                transition
              "
            >
              List your property
            </Link>
          </nav>
        </div>
      </div>

      {open && <MobileMenu close={() => setOpen(false)} />}
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        relative
        text-muted-foreground
        hover:text-foreground
        transition
        after:absolute
        after:left-0 after:-bottom-1
        after:h-px after:w-0
        after:bg-foreground
        after:transition-all
        hover:after:w-full
      "
    >
      {children}
    </Link>
  );
}
