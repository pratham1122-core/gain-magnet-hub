import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const LOGO = "https://www.friggp2c.com/wp-content/uploads/2023/10/MicrosoftTeams-image.png";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Our Experts", href: "#experts" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Urgency banner — fixed 44px desktop, ~64px mobile (wraps) */}
      <div
        className="w-full bg-primary text-white text-[13px] font-medium flex items-center"
        style={{ minHeight: "var(--banner-h)" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 w-full flex items-center justify-center gap-3 text-center">
          <span className="hidden sm:inline">
            PIPEDA enforcement is active. AIDA is advancing. Canadian businesses face fines up to CAD $100,000 — without warning.
          </span>
          <span className="sm:hidden">PIPEDA & AIDA enforcement is active in Canada.</span>
          <a href="#problem" className="text-accent hover:underline whitespace-nowrap">
            Learn more →
          </a>
        </div>
      </div>

      {/* Sticky nav — solid white, shadow appears after 10px scroll */}
      <nav
        className={`bg-white border-b border-border transition-shadow ${
          scrolled ? "shadow-[0_2px_16px_rgba(27,42,107,0.08)]" : ""
        }`}
        style={{ height: "var(--nav-h)" }}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center bg-white">
            <img src={LOGO} alt="Frigg Business Solutions" className="h-11 w-auto object-contain" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[15px] font-medium text-primary hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+19052619123"
              className="hidden md:inline-flex items-center gap-2 text-[14px] font-medium text-primary hover:text-accent"
            >
              <Phone size={14} className="text-accent" />
              <span>+1 (905) 261-9123</span>
            </a>
            <a href="#contact" className="btn-primary !py-2.5 !px-4 !text-[14px]">
              Book Free Assessment
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden text-primary"
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="flex flex-col px-4 py-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-[15px] font-medium text-primary"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:+19052619123"
                className="py-2 text-[14px] font-medium text-primary flex items-center gap-2"
              >
                <Phone size={14} className="text-accent" />
                <span>+1 (905) 261-9123</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
