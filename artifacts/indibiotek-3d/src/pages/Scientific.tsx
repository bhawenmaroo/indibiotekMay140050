import { useState } from "react";
import { PageShell, GlassCard, SectionHeading } from "@/components/PageShell";

const SERVICES = [
  { title: "Labware", desc: "Labware solutions in glassware, plasticware, membranes, filters, and more consumables used in the research sector, clinical safety, or industrial markets." },
  { title: "Pipette", desc: "Precision pipettes and pipetting solutions for accurate liquid handling across research, clinical, and industrial laboratory workflows." },
  { title: "Laboratory Instruments", desc: "Scientific solutions in laboratory instrumentation for healthcare, genomics & proteomics, drug discovery, biopharma, and food & beverage labs. We offer both imported and Indian-made instruments." },
  { title: "Biomedical Instruments", desc: "One-stop solution for biomedical instruments, hospital furniture, gas pipeline systems, and modular operating theatres to meet diverse medical needs." },
];

export default function Scientific() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <PageShell
      eyebrow="Scientific Services"
      title="Complete Scientific Laboratory Solutions"
      intro="We offer a comprehensive range of high-quality plastic labware, glassware, laboratory instruments, pipettes, biomedical instruments, and laboratory consumables designed to ensure accuracy, durability, and reliable performance for everyday laboratory, research, diagnostic, and industrial applications."
      heroImage="https://images.unsplash.com/photo-1579165466949-3180a3d056d5?"
      logo="/divisions/scientific.png"
    >
      <section className="px-5 sm:px-8 md:px-16 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Capabilities" title="Trusted Scientific Laboratory Product, end-to-end Service" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => {
              const isHovered = hovered === s.title;
              const isDimmed = hovered !== null && !isHovered;
              return (
                <GlassCard
                  key={s.title}
                  className="page-reveal ls-card"
                  onMouseEnter={() => setHovered(s.title)}
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
                    {s.title}
                  </h3>
                  <p style={{ color: "rgba(14,42,28,0.65)", fontSize: 14.5, lineHeight: 1.7, fontWeight: 300, position: "relative" }}>{s.desc}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

    </PageShell>
  );
}
