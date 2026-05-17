import { Link, useLocation } from "wouter";
import { useEffect, useRef, useState } from "react";

const LIME      = "#C8FF4D";
const ACCENT    = "#0B6A4D";
const TEXT_DARK = "#0E2A1C";
const TEXT_BODY = "rgba(14,42,28,0.72)";
const TEXT_ACT  = "#0E2A1C";

const DIVISIONS_ITEMS = [
  { label: "Lifesciences", href: "/lifesciences" },
  { label: "Agriculture",  href: "/agri" },
  { label: "Scientific",   href: "/scientific" },
];

const NAV_MAIN = [
  { label: "About",               href: "/about" },
  { label: "Divisions",           href: null, dropdown: DIVISIONS_ITEMS },
  { label: "R&D",                 href: "/rnd" },
  { label: "Publication & Patent",href: "/publications-patent" },
  { label: "Services",            href: "/services" },
  { label: "Catalogues",          href: "/catalogues" },
  { label: "Careers",             href: "https://docs.google.com/forms/d/e/1FAIpQLScTZqh00Lhg8WmvrKbi1HZzeosr9unu0fEywbtqoyW-2iZr7A/viewform?usp=publish-editor", external: true },
];

export function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [divOpen, setDivOpen] = useState(false);
  const [mobileDiv, setMobileDiv] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setDivOpen(false); }, [location]);

  useEffect(() => {
    if (!open) return;
    const startY = window.scrollY;
    const onScroll = () => {
      if (Math.abs(window.scrollY - startY) > 6) setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (!divOpen) return;
    const handler = (e: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(e.target as Node)) {
        setDivOpen(false);
      }
    };
    const onScroll = () => setDivOpen(false);
    document.addEventListener("mousedown", handler);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handler);
      window.removeEventListener("scroll", onScroll);
    };
  }, [divOpen]);

  const isDivisionActive = DIVISIONS_ITEMS.some(d => location.startsWith(d.href));

  return (
    <nav
      data-testid="navbar"
      className="fixed left-1/2 z-50"
      style={{
        top: 14,
        transform: "translateX(-50%)",
        width: "calc(100% - 20px)",
        maxWidth: 1180,
      }}
    >
      <div
        className="mx-auto flex items-center"
        style={{
          padding: "6px 8px 6px 12px",
          gap: 4,
          minWidth: 0,
          background: scrolled ? "rgba(255,255,255,0.94)" : "rgba(255,255,255,0.85)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          border: "1px solid rgba(14,42,28,0.10)",
          borderRadius: 999,
          boxShadow: scrolled
            ? "0 14px 40px rgba(11,28,18,0.14)"
            : "0 8px 28px rgba(11,28,18,0.10)",
          transition: "background 0.25s, box-shadow 0.25s",
        }}
      >
        {/* Logo */}
        <Link href="/" data-testid="link-logo">
          <div
            className="cursor-pointer flex items-center min-w-0"
            style={{ marginRight: 8, padding: "2px 0" }}
          >
            <img
              src="/logo.png"
              alt="Indibiotek — Biotech Solutions for People and Planet"
              className="h-7 sm:h-9"
              style={{ width: "auto", display: "block", maxWidth: "100%" }}
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center" style={{ gap: 0 }}>
          {NAV_MAIN.map((item) => {
            if (item.dropdown) {
              return (
                <div key="divisions" ref={divRef} style={{ position: "relative" }}>
                  <button
                    onClick={() => setDivOpen(v => !v)}
                    style={{
                      padding: "8px 14px",
                      fontSize: 13,
                      fontWeight: 500,
                      color: isDivisionActive ? TEXT_ACT : TEXT_BODY,
                      letterSpacing: "0.005em",
                      borderRadius: 999,
                      transition: "all 0.2s",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      background: isDivisionActive ? "rgba(20,181,126,0.12)" : "transparent",
                      border: "none",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                      style={{ transition: "transform 0.2s", transform: divOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {divOpen && (
                    <div
                      className="nav-dropdown-panel"
                      style={{
                        position: "absolute",
                        top: "calc(100% + 8px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "rgba(255,255,255,0.97)",
                        backdropFilter: "blur(22px)",
                        WebkitBackdropFilter: "blur(22px)",
                        border: "1px solid rgba(14,42,28,0.10)",
                        borderRadius: 14,
                        boxShadow: "0 12px 36px rgba(11,28,18,0.13)",
                        padding: "6px",
                        minWidth: 160,
                        zIndex: 100,
                      }}
                    >
                      {DIVISIONS_ITEMS.map(d => {
                        const active = location.startsWith(d.href);
                        return (
                          <Link key={d.href} href={d.href}>
                            <div
                              style={{
                                padding: "10px 14px",
                                fontSize: 13,
                                fontWeight: 500,
                                color: active ? TEXT_ACT : TEXT_BODY,
                                borderRadius: 8,
                                background: active ? "rgba(20,181,126,0.10)" : "transparent",
                                cursor: "pointer",
                                whiteSpace: "nowrap",
                                transition: "background 0.15s",
                              }}
                              onMouseEnter={e => { if (!active) (e.currentTarget as HTMLDivElement).style.background = "rgba(14,42,28,0.05)"; }}
                              onMouseLeave={e => { if (!active) (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
                            >
                              {d.label}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "8px 14px",
                    fontSize: 13,
                    fontWeight: 500,
                    color: TEXT_BODY,
                    letterSpacing: "0.005em",
                    borderRadius: 999,
                    transition: "all 0.2s",
                    display: "inline-block",
                    background: "transparent",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </a>
              );
            }

            const active = item.href === "/" ? location === "/" : location.startsWith(item.href!);
            return (
              <Link
                key={item.href}
                href={item.href!}
                data-testid={`link-${item.label.toLowerCase().replace(/[^a-z]/g, "")}`}
              >
                <span
                  className="cursor-pointer"
                  style={{
                    padding: "8px 14px",
                    fontSize: 13,
                    fontWeight: 500,
                    color: active ? TEXT_ACT : TEXT_BODY,
                    letterSpacing: "0.005em",
                    borderRadius: 999,
                    transition: "all 0.2s",
                    display: "inline-block",
                    background: active ? "rgba(20,181,126,0.12)" : "transparent",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Spacer */}
        <div className="flex-1 hidden md:block" />

        {/* Phone — WhatsApp */}
        <a
          href="https://wa.me/919608768647"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center justify-center"
          style={{
            width: 38, height: 38, borderRadius: 999,
            background: "rgba(14,42,28,0.05)",
            border: "1px solid rgba(14,42,28,0.10)",
            color: TEXT_BODY,
            marginLeft: 4,
          }}
          data-testid="link-phone"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://in.linkedin.com/company/indibiotek-private-limited"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hidden md:flex items-center justify-center"
          style={{
            width: 38, height: 38, borderRadius: 999,
            background: "rgba(14,42,28,0.05)",
            border: "1px solid rgba(14,42,28,0.10)",
            color: TEXT_BODY,
            marginLeft: 4,
          }}
          data-testid="link-linkedin"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
          </svg>
        </a>

        {/* Spacer for mobile */}
        <div className="flex-1 md:hidden" />

        {/* CONTACT */}
        <a
          href="https://wa.me/919608768647"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="link-contact-cta"
          className="inline-flex items-center justify-center cursor-pointer shrink-0"
          style={{
            height: 34,
            padding: "0 14px",
            borderRadius: 999,
            background: TEXT_DARK,
            color: LIME,
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: "0.10em",
            fontFamily: "Menlo, monospace",
            marginLeft: 4,
            boxShadow: "0 6px 18px rgba(14,42,28,0.22)",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          CONTACT
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden shrink-0"
          onClick={() => setOpen(v => !v)}
          data-testid="button-mobile-menu"
          style={{
            width: 34, height: 34, borderRadius: 999, marginLeft: 4,
            background: "rgba(14,42,28,0.05)",
            border: "1px solid rgba(14,42,28,0.10)",
            color: TEXT_BODY,
            fontSize: 16,
            lineHeight: 1,
          }}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          className="md:hidden mt-2 rounded-2xl nav-mobile-menu"
          style={{
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(22px)",
            border: "1px solid rgba(14,42,28,0.08)",
            padding: 12,
            boxShadow: "0 12px 40px rgba(11,28,18,0.10)",
          }}
        >
          {NAV_MAIN.map((item) => {
            if (item.dropdown) {
              return (
                <div key="divisions-mobile">
                  <div
                    onClick={() => setMobileDiv(v => !v)}
                    style={{
                      padding: "12px 16px",
                      fontSize: 14,
                      color: isDivisionActive ? TEXT_ACT : TEXT_BODY,
                      cursor: "pointer",
                      borderRadius: 8,
                      background: isDivisionActive ? "rgba(20,181,126,0.10)" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {item.label}
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                      style={{ transition: "transform 0.2s", transform: mobileDiv ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {mobileDiv && DIVISIONS_ITEMS.map((d, i) => (
                    <Link key={d.href} href={d.href}>
                      <div
                        className="nav-mobile-sub"
                        style={{
                          animationDelay: `${i * 0.04}s`,
                          padding: "10px 16px 10px 28px",
                          fontSize: 13.5,
                          color: location.startsWith(d.href) ? TEXT_ACT : TEXT_BODY,
                          cursor: "pointer",
                          borderRadius: 8,
                          background: location.startsWith(d.href) ? "rgba(20,181,126,0.10)" : "transparent",
                        }}
                      >
                        {d.label}
                      </div>
                    </Link>
                  ))}
                </div>
              );
            }
            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    fontSize: 14,
                    color: TEXT_BODY,
                    cursor: "pointer",
                    borderRadius: 8,
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </a>
              );
            }

            const active = item.href === "/" ? location === "/" : location.startsWith(item.href!);
            return (
              <Link key={item.href} href={item.href!}>
                <div
                  style={{
                    padding: "12px 16px",
                    fontSize: 14,
                    color: active ? TEXT_ACT : TEXT_BODY,
                    cursor: "pointer",
                    borderRadius: 8,
                    background: active ? "rgba(20,181,126,0.10)" : "transparent",
                  }}
                >
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
