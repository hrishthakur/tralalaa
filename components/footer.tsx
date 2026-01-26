export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Remote Work Stays
            </h3>
            <p className="mt-3 text-sm text-slate-600 max-w-xs">
              Purpose-built mountain stays for remote professionals who value
              focus, comfort, and reliable connectivity.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-sm font-medium text-slate-900">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="/" className="hover:text-slate-900">Home</a></li>
              <li><a href="/locations" className="hover:text-slate-900">Locations</a></li>
              <li><a href="/list-your-property" className="hover:text-slate-900">List your property</a></li>
              <li><a href="/contact" className="hover:text-slate-900">Contact us</a></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-sm font-medium text-slate-900">
              Support
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="/faq" className="hover:text-slate-900">FAQs</a></li>
              <li><a href="/terms" className="hover:text-slate-900">Terms of service</a></li>
              <li><a href="/privacy" className="hover:text-slate-900">Privacy policy</a></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-sm font-medium text-slate-900">
              Connect with us
            </h4>

            <div className="mt-4 flex items-center gap-4">
              <SocialIcon
                href="https://instagram.com/"
                label="Instagram"
              >
                <InstagramIcon />
              </SocialIcon>

              <SocialIcon
                href="https://linkedin.com/"
                label="LinkedIn"
              >
                <LinkedInIcon />
              </SocialIcon>

              <SocialIcon
                href="https://twitter.com/"
                label="X (Twitter)"
              >
                <TwitterIcon />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 pt-8 border-t flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Remote Work Stays. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0">
            Built for remote professionals
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ================= ICON HELPERS ================= */

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="
        h-10 w-10
        rounded-full
        border
        border-slate-200
        flex items-center justify-center
        text-slate-600
        hover:text-slate-900
        hover:border-slate-300
        transition
      "
    >
      {children}
    </a>
  );
}

/* ================= SVG ICONS ================= */

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M4 3a2 2 0 110 4 2 2 0 010-4zm-1 6h2v12H3V9zm6 0h2v2h.03a3 3 0 012.97-2c3.18 0 3.77 2.09 3.77 4.8V21h-2v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-2 1.35-2 2.74V21H9V9z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 4.79a4.28 4.28 0 001.33 5.72 4.25 4.25 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.98A8.6 8.6 0 012 19.54 12.14 12.14 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68v-.53A8.3 8.3 0 0022.46 6z" />
    </svg>
  );
}
