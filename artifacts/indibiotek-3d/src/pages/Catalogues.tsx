import { PageShell } from "@/components/PageShell";

const ACCENT = "#0B6A4D";
const ACCENT_BRIGHT = "#14B57E";
const TEXT_DARK = "#0E2A1C";
const TEXT_BODY = "rgba(14,42,28,0.72)";
const BG = "#F4F8F5";

const CATALOGUES = [
  { sno: 1, division: "Lifesciences", name: "IB Chemical Reagents",      link: "https://drive.google.com/drive/folders/1IRcKCD4UCwcTx4ramVfYv2r6qB7R5N-g?usp=sharing" },
  { sno: 2, division: "Lifesciences", name: "IB Clinical Samples",        link: "https://drive.google.com/drive/folders/1lLzFSX1BckU0d9kkHxwAXnPXs6tuxscY?usp=sharing" },
  { sno: 3, division: "Lifesciences", name: "IB Molecular Biology",       link: "" },
  { sno: 4, division: "Lifesciences", name: "IB Purification Kits",       link: "" },
  { sno: 5, division: "Lifesciences", name: "IB Human Diagnostics",       link: "" },
  { sno: 6, division: "Lifesciences", name: "IB Non-Human Diagnostics",   link: "" },
  { sno: 7, division: "Agriculture",  name: "IB Agriculture Products",    link: "" },
  { sno: 8, division: "Scientific",   name: "IB Pipettes",                link: "" },
  { sno: 9, division: "Scientific",   name: "IB Scientific Instruments",  link: "" },
];

export default function Catalogues() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Catalogues"
      intro="Browse and download our product catalogues across all divisions. Detailed specifications, technical data, and ordering information for every product we offer."
      heroImage="/catalogues-hero.png"
    >
      <section className="px-5 sm:px-8 md:px-16 py-14 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div
            className="page-reveal"
            style={{
              background: "#fff",
              border: "1px solid rgba(14,42,28,0.08)",
              borderRadius: 18,
              boxShadow: "0 4px 24px rgba(14,42,28,0.07)",
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: ACCENT }}>
                  {["Sr. No.", "Division", "Catalogue Name", "View Catalogue"].map((col) => (
                    <th
                      key={col}
                      style={{
                        padding: "16px 20px",
                        textAlign: "left",
                        fontSize: 12,
                        fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#fff",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CATALOGUES.map((row, i) => (
                  <tr
                    key={row.sno}
                    style={{
                      background: i % 2 === 0 ? "#fff" : BG,
                      borderBottom: "1px solid rgba(14,42,28,0.06)",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(20,181,126,0.06)")}
                    onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? "#fff" : BG)}
                  >
                    <td style={{ padding: "16px 20px", fontSize: 14, color: TEXT_BODY, fontWeight: 500, width: 80 }}>
                      {String(row.sno).padStart(2, "0")}
                    </td>
                    <td style={{ padding: "16px 20px", fontSize: 14, color: TEXT_DARK, fontWeight: 600 }}>
                      <span style={{
                        display: "inline-block",
                        padding: "3px 10px",
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 600,
                        background: "rgba(11,106,77,0.08)",
                        color: ACCENT,
                      }}>
                        {row.division}
                      </span>
                    </td>
                    <td style={{ padding: "16px 20px", fontSize: 14, color: TEXT_DARK, fontWeight: 500 }}>
                      {row.name}
                    </td>
                    <td style={{ padding: "16px 20px" }}>
                      {row.link ? (
                        <a
                          href={row.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "7px 16px",
                            borderRadius: 999,
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#fff",
                            background: ACCENT,
                            textDecoration: "none",
                            transition: "background 0.2s",
                          }}
                          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = ACCENT_BRIGHT)}
                          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = ACCENT)}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                          View
                        </a>
                      ) : (
                        <span style={{
                          display: "inline-block",
                          padding: "7px 16px",
                          borderRadius: 999,
                          fontSize: 13,
                          fontWeight: 600,
                          color: "rgba(14,42,28,0.35)",
                          background: "rgba(14,42,28,0.05)",
                        }}>
                          Coming Soon
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
