import { useState } from "react";
import { PageShell, GlassCard, SectionHeading } from "@/components/PageShell";

const PROGRAMS = [
  { title: "Beneficial Element Fertilizer", desc: "Fertilizers enriched with beneficial elements like silicon, selenium, and cobalt to enhance plant immunity and stress tolerance." },
  { title: "Organic Fertilizers", desc: "Natural, carbon-rich fertilizers that improve soil structure, microbial diversity, and long-term fertility." },
  { title: "NP Complex Fertilizers", desc: "Balanced nitrogen-phosphorus formulations for optimized root development and early-stage crop establishment." },
  { title: "Straight Nitrogenous Fertilizers", desc: "High-efficiency nitrogen sources supporting rapid vegetative growth and improved crop yield." },
  { title: "Fortified Fertilizers", desc: "Macro and micronutrient-enriched fertilizers designed to address soil deficiencies and boost crop quality." },
  { title: "Liquid Fertilizers", desc: "Fast-acting liquid nutrient solutions for foliar application and fertigation across diverse crop systems." },
  { title: "Humic Acid, Fulvic Acid & Derivatives", desc: "Soil conditioners that enhance nutrient uptake, water retention, and root proliferation in all soil types." },
  { title: "Seaweed Extract", desc: "Natural plant biostimulants derived from marine algae, promoting growth hormones and resilience to abiotic stress." },
  { title: "Botanical Extract", desc: "Plant-derived bioactive compounds that stimulate crop metabolism and improve resistance to pests and disease." },
  { title: "Mixed Formulations of Biostimulants", desc: "Synergistic blends of multiple biostimulant inputs formulated for targeted crop performance outcomes." },
  { title: "Protein Hydrolysates & Amino Acids", desc: "Readily absorbable nitrogen sources that support protein synthesis, enzyme activity, and overall plant vigour." },
  { title: "Food & Agri Products", desc: "A broad portfolio spanning cereals, pulses, fruits, vegetables, dairy, oils, spices, herbal products, honey, poultry, seafood, and animal feeds." },
];

export default function Agri() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <PageShell
      eyebrow="Agri Division"
      title="Biology that grows with the planet"
      intro="Our agricultural biotechnology division develops products and platforms that help farmers grow more food with fewer chemicals, less water and healthier soils."
      heroImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?"
      logo="/divisions/agri.png"
    >
      <section className="px-5 sm:px-8 md:px-16 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Programs" title="Solutions for Soil and Crops" />
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
