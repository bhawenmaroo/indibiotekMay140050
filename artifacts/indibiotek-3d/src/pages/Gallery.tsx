import { useState } from "react";
import GALLERY_IMAGES from "@/gallery-images";

const TEXT_BODY = "rgba(14,42,28,0.65)";

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(i => (i !== null && i > 0 ? i - 1 : GALLERY_IMAGES.length - 1));
  const next = () => setLightbox(i => (i !== null && i < GALLERY_IMAGES.length - 1 ? i + 1 : 0));

  return (
    <div className="min-h-screen" style={{ background: "#F4F8F5" }}>
      {/* Compact header */}
      <div
        className="px-5 sm:px-8 md:px-16"
        style={{
          paddingTop: "clamp(88px, 10vw, 120px)",
          paddingBottom: 40,
          background: "linear-gradient(180deg, #ECF3EE 0%, #F4F8F5 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div style={{
            fontFamily: "Menlo, monospace", fontSize: 13, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#0B6A4D", marginBottom: 14,
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ display: "inline-block", width: 32, height: 2, background: "#0B6A4D", borderRadius: 2 }} />
            Gallery
          </div>
          <h1 style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "#0E2A1C",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            margin: 0,
            marginBottom: 12,
          }}>
            Our Journey in Pictures
          </h1>
          <p style={{
            fontSize: "1rem",
            color: TEXT_BODY,
            lineHeight: 1.65,
            margin: 0,
            maxWidth: 560,
          }}>
            A visual record of Indibiotek's work — from the lab bench to the field.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="px-5 sm:px-8 md:px-16 pb-20">
        <div
          className="max-w-6xl mx-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
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
                background: "#fff",
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
                style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", display: "block" }}
              />
              {img.caption && (
                <div style={{ padding: "10px 14px", fontSize: 13, color: TEXT_BODY, fontWeight: 500, lineHeight: 1.5 }}>
                  {img.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Expanded image overlay */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 999,
            background: "rgba(14,28,20,0.55)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "24px 48px",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.28)",
              maxWidth: "min(72vw, 860px)",
              width: "100%",
              position: "relative",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute", top: 12, right: 12, zIndex: 10,
                width: 34, height: 34, borderRadius: "50%",
                background: "rgba(14,28,20,0.55)", border: "none",
                color: "#fff", fontSize: 16, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >×</button>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              style={{
                position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", zIndex: 10,
                width: 38, height: 38, borderRadius: "50%",
                background: "rgba(14,28,20,0.5)", border: "none",
                color: "#fff", fontSize: 22, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >‹</button>

            <img
              src={GALLERY_IMAGES[lightbox].src}
              alt={GALLERY_IMAGES[lightbox].caption ?? "Gallery image"}
              style={{ width: "100%", maxHeight: "62vh", objectFit: "cover", display: "block" }}
            />

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              style={{
                position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", zIndex: 10,
                width: 38, height: 38, borderRadius: "50%",
                background: "rgba(14,28,20,0.5)", border: "none",
                color: "#fff", fontSize: 22, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >›</button>

            {(GALLERY_IMAGES[lightbox].caption) && (
              <div style={{ padding: "14px 20px", borderTop: "1px solid rgba(14,42,28,0.08)" }}>
                <p style={{ margin: 0, fontSize: 13, color: TEXT_BODY, fontWeight: 500 }}>
                  {GALLERY_IMAGES[lightbox].caption}
                </p>
                <p style={{ margin: "4px 0 0", fontSize: 11, color: "rgba(14,42,28,0.35)" }}>
                  {lightbox + 1} / {GALLERY_IMAGES.length}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
