import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import GALLERY_IMAGES from "@/gallery-images";

const ACCENT   = "#0B6A4D";
const TEXT_DARK = "#0E2A1C";
const TEXT_BODY = "rgba(14,42,28,0.65)";

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(i => (i !== null && i > 0 ? i - 1 : GALLERY_IMAGES.length - 1));
  const next = () => setLightbox(i => (i !== null && i < GALLERY_IMAGES.length - 1 ? i + 1 : 0));

  return (
    <PageShell
      badge="Gallery"
      title="Our Journey in Pictures"
      intro="A visual record of Indibiotek's work — from the lab bench to the field."
    >
      {GALLERY_IMAGES.length === 0 ? (
        <div
          style={{
            minHeight: 320,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            padding: "60px 0",
            color: TEXT_BODY,
            textAlign: "center",
          }}
        >
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35 }}>
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <p style={{ fontSize: "1rem", fontWeight: 500, maxWidth: 360, color: TEXT_BODY }}>
            Photos will appear here once uploaded.
          </p>
          <p style={{ fontSize: "0.85rem", color: TEXT_BODY, maxWidth: 400, lineHeight: 1.6 }}>
            Add images to <code style={{ background: "rgba(14,42,28,0.07)", padding: "2px 6px", borderRadius: 4, fontSize: "0.82rem" }}>public/gallery/</code> and register them in <code style={{ background: "rgba(14,42,28,0.07)", padding: "2px 6px", borderRadius: 4, fontSize: "0.82rem" }}>src/gallery-images.ts</code>.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
            paddingBottom: 40,
          }}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              style={{
                borderRadius: 14,
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid rgba(14,42,28,0.08)",
                boxShadow: "0 4px 16px rgba(14,42,28,0.07)",
                background: "rgba(14,42,28,0.03)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 28px rgba(14,42,28,0.13)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(14,42,28,0.07)";
              }}
            >
              <img
                src={img.src}
                alt={img.caption ?? `Gallery image ${i + 1}`}
                style={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {img.caption && (
                <div style={{
                  padding: "10px 14px",
                  fontSize: 13,
                  color: TEXT_BODY,
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}>
                  {img.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 999,
            background: "rgba(10,20,14,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 20,
            backdropFilter: "blur(8px)",
          }}
        >
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            style={{
              position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
              width: 44, height: 44, borderRadius: "50%",
              background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff", fontSize: 20, cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center",
            }}
          >‹</button>

          <div
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: "min(90vw, 960px)", width: "100%", textAlign: "center" }}
          >
            <img
              src={GALLERY_IMAGES[lightbox].src}
              alt={GALLERY_IMAGES[lightbox].caption ?? "Gallery image"}
              style={{
                maxWidth: "100%", maxHeight: "80vh",
                borderRadius: 16, objectFit: "contain",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
              }}
            />
            {GALLERY_IMAGES[lightbox].caption && (
              <p style={{
                marginTop: 14, color: "rgba(255,255,255,0.72)",
                fontSize: 14, fontWeight: 500,
              }}>
                {GALLERY_IMAGES[lightbox].caption}
              </p>
            )}
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 8 }}>
              {lightbox + 1} / {GALLERY_IMAGES.length}
            </p>
          </div>

          <button
            onClick={e => { e.stopPropagation(); next(); }}
            style={{
              position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
              width: 44, height: 44, borderRadius: "50%",
              background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff", fontSize: 20, cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center",
            }}
          >›</button>

          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute", top: 20, right: 20,
              width: 38, height: 38, borderRadius: "50%",
              background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff", fontSize: 18, cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center",
            }}
          >×</button>
        </div>
      )}
    </PageShell>
  );
}
