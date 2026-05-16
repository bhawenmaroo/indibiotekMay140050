import { useState } from "react";
import { PageShell, GlassCard } from "@/components/PageShell";

const TEXT_DARK = "#0E2A1C";
const ACCENT    = "#0B6A4D";

const PUBLICATIONS = [
  {
    type: "Publication",
    title: "Coming Soon",
    desc: "Our research publications will be listed here. Check back for peer-reviewed papers and scientific articles from the Indibiotek team.",
  },
];

const PATENTS = [
  {
    title: "Autonomous Robotic System for Real-Time Biomedical Waste Classification and Segregation",
    meta: "Application No. 202511077832 · Filed 14 Aug 2025",
    status: "Filed",
  },
  {
    title: "Portable CRISPR-Microfluidics Multiplex Biosensor for a Point-of-Care Device for Women's Health",
    meta: "Submission Process",
    status: "Pending",
  },
  {
    title: "A Sustainable Seaweed-Derived Bioplastic Material and Manufacturing Process",
    meta: "Submission Process",
    status: "Pending",
  },
  {
    title: "A-Based Point-of-Care Device for Detection of Drug-Resistant Infectious Pathogens",
    meta: "Submission Process",
    status: "Pending",
  },
  {
    title: "AI-Assisted INAA-Based Point-of-Care Device for Rapid Detection of Aquatic Pathogens",
    meta: "Submission Process",
    status: "Pending",
  },
];

export default function PublicationsPatent() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <PageShell
      eyebrow="Publications & Patent"
      title="Research, Innovation & Intellectual Property"
      intro="Indibiotek's commitment to science is reflected in our peer-reviewed publications and patent portfolio. Explore our contributions to biotechnology, lifesciences, and agricultural innovation."
      heroImage="/publications-hero.jpg"
    >
      <section className="px-5 sm:px-8 md:px-16 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto">

          {/* Patents */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span
                style={{
                  fontFamily: "Menlo, monospace",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  color: ACCENT,
                  textTransform: "uppercase",
                }}
              >
                — Patents
              </span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                fontWeight: 700,
                color: TEXT_DARK,
                letterSpacing: "-0.02em",
                marginBottom: 28,
              }}
            >
              Intellectual Property
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PATENTS.map((p) => {
                const key = `pat-${p.title}`;
                const isHovered = hovered === key;
                const isDimmed = hovered !== null && !isHovered;
                return (
                  <GlassCard
                    key={key}
                    className="page-reveal ls-card"
                    onMouseEnter={() => setHovered(key)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      padding: 28,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
                      transform: isHovered ? "translateY(-6px) scale(1.025)" : "translateY(0) scale(1)",
                      boxShadow: isHovered
                        ? "0 16px 48px rgba(11,106,77,0.22), 0 2px 8px rgba(11,106,77,0.12)"
                        : "0 2px 12px rgba(14,42,28,0.06)",
                      opacity: isDimmed ? 0.38 : 1,
                    }}
                  >
                    <div className="ls-orb" />
                    <div className="ls-shimmer" />
                    <div className="ls-border-glow" />
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "1.08rem",
                        fontWeight: 600,
                        color: isHovered ? ACCENT : TEXT_DARK,
                        marginBottom: 10,
                        transition: "color 0.25s ease",
                        position: "relative",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ color: "rgba(14,42,28,0.55)", fontSize: 13, lineHeight: 1.6, fontWeight: 400, position: "relative", fontFamily: "Menlo, monospace", marginTop: 4 }}>
                      {p.meta}
                    </p>
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: 14,
                        padding: "3px 10px",
                        borderRadius: 20,
                        fontSize: 11.5,
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        background: p.status === "Filed" ? "rgba(11,106,77,0.12)" : "rgba(14,42,28,0.07)",
                        color: p.status === "Filed" ? ACCENT : "rgba(14,42,28,0.5)",
                        position: "relative",
                      }}
                    >
                      {p.status === "Filed" ? "● Filed" : "○ Submission Process"}
                    </span>
                  </GlassCard>
                );
              })}
            </div>
          </div>

          {/* Publications */}
          <div style={{ marginTop: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span
                style={{
                  fontFamily: "Menlo, monospace",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  color: ACCENT,
                  textTransform: "uppercase",
                }}
              >
                — Publications
              </span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                fontWeight: 700,
                color: TEXT_DARK,
                letterSpacing: "-0.02em",
                marginBottom: 28,
              }}
            >
              Peer-Reviewed Research
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PUBLICATIONS.map((p) => {
                const key = `pub-${p.title}`;
                const isHovered = hovered === key;
                const isDimmed = hovered !== null && !isHovered;
                return (
                  <GlassCard
                    key={key}
                    className="page-reveal ls-card"
                    onMouseEnter={() => setHovered(key)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      padding: 28,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
                      transform: isHovered ? "translateY(-6px) scale(1.025)" : "translateY(0) scale(1)",
                      boxShadow: isHovered
                        ? "0 16px 48px rgba(11,106,77,0.22), 0 2px 8px rgba(11,106,77,0.12)"
                        : "0 2px 12px rgba(14,42,28,0.06)",
                      opacity: isDimmed ? 0.38 : 1,
                    }}
                  >
                    <div className="ls-orb" />
                    <div className="ls-shimmer" />
                    <div className="ls-border-glow" />
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "1.08rem",
                        fontWeight: 600,
                        color: isHovered ? ACCENT : TEXT_DARK,
                        marginBottom: 10,
                        transition: "color 0.25s ease",
                        position: "relative",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ color: "rgba(14,42,28,0.65)", fontSize: 14.5, lineHeight: 1.7, fontWeight: 300, position: "relative" }}>
                      {p.desc}
                    </p>
                  </GlassCard>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
