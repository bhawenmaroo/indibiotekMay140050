import { PageShell, GlassCard, SectionHeading } from "@/components/PageShell";


const PATHOGENS = [
  "Antimicrobial Resistance",
  "Cancer Markers",
  "Tropical Diseases",
  "Infectious Diseases",
  "MTB and Resistance",
  "Fever with Rash / Fever with Lymphadenopathy",
  "Acute Diarrhea",
  "Acute Encephalitis Syndrome",
  "Acute Undifferentiated Fabrile Illness",
  "Acute Respiratory Illness",
  "Food & Dairy Diagnostics",
  "Veterinary / Poultry / Aqua Diagnostics",
];

const RD_TECH = [
  "Diagnostic Kit Development",
  "Paper Based / POC Diagnostics",
  "Combo Lateral Flow Assay",
  "Nanoparticles Development",
  "Screen-Printed Electrode (SPE) Technology",
  "Combo Clinical Biochemistry, Molecular and Immunoassay Kit",
  "CRISPR-CaS Technology",
  "Droplet Microfluidics",
  "AI / ML / IoT in Healthcare",
  "Bio-Based Chemical & Enzymes",
  "Agro & Med Waste Management",
];


const PIPELINE = [
  { stage: "Discovery", desc: "Target identification, screening, lead generation.", color: "#5AC8FF" },
  { stage: "Development", desc: "Optimisation, preclinical validation, scale-up.", color: "#0B6A4D" },
  { stage: "Translation", desc: "Clinical, regulatory and field studies.", color: "#3EE6A8" },
  { stage: "Commercial", desc: "Manufacturing, distribution, deployment.", color: "#B8E8C8" },
];

export default function RnD() {
  return (
    <PageShell
      eyebrow="Research & Development"
      title="Reimagining Biotech in BHARAT with Indigenous Innovation for Global Transformation"
      titleNode={<>Reimagining Biotech in BHARAT<br />with Indigenous Innovation for Global Transformation</>}
      intro="Our R&D platform brings together molecular biology, computation and engineering — operating across the full path from hypothesis to product."
      heroImage="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?"
    >
      <section className="px-5 sm:px-8 md:px-16 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Pipeline" title="From Idea to Impact" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {PIPELINE.map((p, i) => (
              <GlassCard key={p.stage} style={{ padding: 24 }} className="page-reveal">
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color, boxShadow: `0 0 12px ${p.color}` }} />
                  <span style={{ color: p.color, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                    Stage {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display" style={{ fontSize: "1.1rem", fontWeight: 600, color: "#0E2A1C", marginBottom: 8 }}>{p.stage}</h3>
                <p style={{ color: "rgba(14,42,28,0.62)", fontSize: 13.5, lineHeight: 1.6, fontWeight: 300 }}>{p.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Prioritization of Pathogens */}
      <section style={{
        position: "relative",
        backgroundImage: "url('/superbugs.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "96px 20px",
      }}>
        {/* soft light veil — image bleeds through */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(232,247,240,0.88) 0%, rgba(220,242,234,0.78) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1152, margin: "0 auto" }}>
          <div style={{ marginBottom: 52 }}>
            <span style={{ color: "#0B6A4D", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>— Focus Areas</span>
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#0E2A1C", marginTop: 10, letterSpacing: "-0.01em" }}>
              Prioritization of Pathogens
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PATHOGENS.map((item) => (
              <div key={item} className="page-reveal" style={{
                background: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(11,106,77,0.15)",
                borderRadius: 16,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 14,
                backdropFilter: "blur(16px)",
                boxShadow: "0 2px 16px rgba(14,42,28,0.08)",
                transition: "box-shadow 0.2s",
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0B6A4D", flexShrink: 0 }} />
                <span className="font-display" style={{ fontSize: "1rem", fontWeight: 600, color: "#0E2A1C", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research and Development in Technology */}
      <section style={{
        position: "relative",
        backgroundImage: "url('/portable-sequencing.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "96px 20px",
      }}>
        {/* soft light veil — image bleeds through */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(230,242,255,0.88) 0%, rgba(220,235,250,0.78) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1152, margin: "0 auto" }}>
          <div style={{ marginBottom: 52 }}>
            <span style={{ color: "#1a5f8a", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>— Technology</span>
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#0E2A1C", marginTop: 10, letterSpacing: "-0.01em" }}>
              Research and Development in Technology
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {RD_TECH.map((item) => (
              <div key={item} className="page-reveal" style={{
                background: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(26,95,138,0.15)",
                borderRadius: 16,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 14,
                backdropFilter: "blur(16px)",
                boxShadow: "0 2px 16px rgba(14,42,28,0.08)",
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a5f8a", flexShrink: 0 }} />
                <span className="font-display" style={{ fontSize: "1rem", fontWeight: 600, color: "#0E2A1C", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageShell>
  );
}
