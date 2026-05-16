import { useState } from "react";
import { PageShell, GlassCard, SectionHeading } from "@/components/PageShell";


const PROGRAMS = [
  { title: "Chemicals & Reagents", desc: "High-purity chemicals and IVD reagents for laboratory quality control, R&D, hematology, and clinical chemistry. Includes analytical grade chemicals, raw materials, and specialty reagents." },
  { title: "Clinical Samples", desc: "Well-characterized biological specimens for diagnostic assay development, validation, and research. Includes sera, plasma, EDTA blood, and swabs across infectious disease, oncology, autoimmune, and metabolic categories." },
  { title: "Human Diagnostics", desc: "Molecular, immunological, and biochemical diagnostics for infectious diseases, oncology, AMR, cardiac, and clinical biochemistry. Includes qPCR kits, rapid tests, ELISA, and reagents." },
  { title: "Non-Human Diagnostics", desc: "Pathogen detection kits for aquaculture, poultry, swine, ruminant, companion animal, agricultural, food safety, GMO screening, allergen detection, and species identification." },
  { title: "Molecular Biology", desc: "PCR enzymes, mastermixes, buffers, plasmids, ladders, gel staining, cell culture media, recombinant proteins, and antibodies for advanced molecular biology workflows." },
  { title: "Purification Kits", desc: "High-yield nucleic acid isolation kits for DNA and RNA from blood, tissue, soil, water, and more. Silica spin column and magnetic bead formats for research and diagnostics." },
  { title: "Excellence & Innovation", desc: "Emphasizing excellence and innovation to address evolving market demands across diverse streams like diagnostics and lifesciences research." },
  { title: "Regulatory & Quality", desc: "GLP / GMP-aligned operations and global regulatory dossier preparation." },
  { title: "Strategic Partnerships", desc: "Co-development with pharma, hospitals and academic centres of excellence." },
];

export default function Lifesciences() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <PageShell
      eyebrow="Lifesciences Division"
      title="Advancing Healthcare through Biotechnology, Diagnostics & Scientific Products"
      intro="We specialize in biologics, analytical development, and diagnostic platforms, supported by robust scientific products and modern manufacturing capabilities. Delivering precision, quality, and performance across life sciences."
      heroImage="/lifesciences-hero.jpg"
      logo="/divisions/lifesciences.png"
    >
      <section className="px-5 sm:px-8 md:px-16 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Programs" title="Capabilities across the VALUE CHAIN" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMS.map((p) => {
              const isHovered = hovered === p.title;
              const isDimmed = hovered !== null && !isHovered;
              return (
                <GlassCard
                  key={p.title}
                  className="page-reveal ls-card"
                  onMouseEnter={() => setHovered(p.title)}
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
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      color: isHovered ? "#0B6A4D" : "#0E2A1C",
                      marginBottom: 10,
                      transition: "color 0.25s ease",
                      position: "relative",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ color: "rgba(14,42,28,0.65)", fontSize: 14.5, lineHeight: 1.7, fontWeight: 300, position: "relative" }}>{p.desc}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

    </PageShell>
  );
}
