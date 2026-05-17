import { PageShell } from "@/components/PageShell";

export default function Gallery() {
  return (
    <PageShell
      badge="Gallery"
      title="Our Journey in Pictures"
      intro="A visual record of Indibiotek's work — from the lab bench to the field."
    >
      <div
        style={{
          minHeight: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          padding: "60px 0",
          color: "rgba(14,42,28,0.45)",
          textAlign: "center",
        }}
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <p style={{ fontSize: "1rem", fontWeight: 500, maxWidth: 340 }}>
          Pictures coming soon — check back shortly.
        </p>
      </div>
    </PageShell>
  );
}
