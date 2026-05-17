const ACCENT = "#0B6A4D";
const TEXT_DARK = "#0E2A1C";
const TEXT_BODY = "rgba(14,42,28,0.72)";
const TEXT_MUTE = "rgba(14,42,28,0.50)";

export function Footer() {
  return (
    <footer
      className="relative z-10 mt-24"
      data-testid="footer"
      style={{
        background: "linear-gradient(180deg, #ECF3EE 0%, #DCE9DF 100%)",
        borderTop: "1px solid rgba(20,181,126,0.18)",
      }}
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 text-center">
        {/* Company name */}
        <div
          style={{
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            fontSize: 22,
            letterSpacing: "-0.01em",
            fontWeight: 800,
            color: TEXT_DARK,
            marginBottom: 14,
          }}
        >
          Indibiotek Private Limited
        </div>

        {/* All info in one compact paragraph */}
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.75,
            color: TEXT_BODY,
            marginBottom: 16,
          }}
        >
          R&D Facility: Centre for Drug Design Discovery &amp; Development (C4D), SRM University, Delhi-NCR, Sonipat{" "}
          <span style={{ color: TEXT_MUTE }}>|</span>{" "}
          E-YUVA Centre (Supported by BIRAC), Adamas University{" "}
          <span style={{ color: TEXT_MUTE }}>|</span>{" "}
          The Bengal Chamber of Commerce &amp; Industry (BCCI){" "}
          <span style={{ color: TEXT_MUTE }}>|</span>{" "}
          Registered Office: Kolkata, West Bengal{" "}
          <span style={{ color: TEXT_MUTE }}>|</span>{" "}
          Regional Office: Kolkata, Guwahati, Bengaluru, Delhi-NCR, Andaman &amp; Nicobar (UT)
        </p>

        {/* Contact line */}
        <p style={{ fontSize: 13.5, color: TEXT_BODY, marginBottom: 20 }}>
          Contact us:{" "}
          <a
            href="tel:+918902052927"
            style={{ color: ACCENT, fontWeight: 600, textDecoration: "none" }}
            data-testid="footer-phone"
          >
            +918902052927
          </a>
          {" | "}
          <a
            href="mailto:info@indibiotek.com"
            style={{ color: ACCENT, fontWeight: 600, textDecoration: "none" }}
            data-testid="footer-email"
          >
            info@indibiotek.com
          </a>
        </p>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 1,
            background: "rgba(20,181,126,0.30)",
            margin: "0 auto 16px",
          }}
        />

        {/* Copyright */}
        <div style={{ color: TEXT_MUTE, fontSize: 12, letterSpacing: "0.02em" }}>
          Copyright © {new Date().getFullYear()}{" "}
          <span style={{ color: TEXT_DARK, fontWeight: 700 }}>
            INDIBIOTEK PRIVATE LIMITED.
          </span>{" "}
          — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
