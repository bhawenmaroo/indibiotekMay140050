import { PageShell, SectionHeading } from "@/components/PageShell";

const ACCENT = "#0B6A4D";
const ACCENT_BRIGHT = "#14B57E";
const TEXT_DARK = "#0E2A1C";

export default function Catalogues() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Catalogues"
      intro="Browse and download our product catalogues across all divisions. Detailed specifications, technical data, and ordering information for every product we offer."
    >
      <section className="px-5 sm:px-8 md:px-16 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Coming Soon" title="Catalogues in preparation" align="center" />
          <div
            className="page-reveal"
            style={{
              maxWidth: 560,
              margin: "0 auto",
              textAlign: "center",
              padding: "clamp(40px,6vw,72px) clamp(24px,4vw,48px)",
              background: "rgba(255,255,255,0.80)",
              border: "1px solid rgba(14,42,28,0.08)",
              borderRadius: 20,
              boxShadow: "0 4px 20px rgba(14,42,28,0.06)",
            }}
          >
            <div style={{
              width: 60, height: 60, borderRadius: "50%",
              background: `rgba(20,181,126,0.10)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 24px",
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={ACCENT_BRIGHT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <p style={{
              fontSize: "1rem", color: "rgba(14,42,28,0.65)",
              lineHeight: 1.7, margin: 0,
            }}>
              Our product catalogues are currently being prepared. Check back soon or{" "}
              <a href="/contact" style={{ color: ACCENT_BRIGHT, fontWeight: 600, textDecoration: "none" }}>
                contact us
              </a>{" "}
              directly for product information and specifications.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
