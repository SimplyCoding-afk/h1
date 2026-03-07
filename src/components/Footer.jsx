import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "#050505",
        color: "rgba(255,255,255,0.85)",
        padding: "60px 20px 40px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* KATANA DIVIDER */}
      <div
        style={{
          width: "200px",
          height: "2px",
          margin: "0 auto 30px",
          background:
            "linear-gradient(90deg, transparent, rgba(220,38,38,0.9), transparent)",
          boxShadow: "0 0 15px rgba(220,38,38,0.8)"
        }}
      />

      {/* TITLE */}
      <h2
        style={{
          fontSize: "28px",
          letterSpacing: "4px",
          fontFamily: "Georgia, serif",
          marginBottom: "12px",
          textShadow: "0 0 10px rgba(220,38,38,0.8)"
        }}
      >
        HACKSTREET 4.0
      </h2>

      {/* TAGLINE */}
      <p
        style={{
          fontSize: "14px",
          opacity: 0.8,
          marginBottom: "25px",
          letterSpacing: "1px"
        }}
      >
        24 Hours of Innovation • Code • Creativity
      </p>

      {/* SOCIAL ICONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "30px"
        }}
      >
        {[FaGithub, FaInstagram, FaLinkedin].map((Icon, i) => (
          <Icon
            key={i}
            size={24}
            style={{
              cursor: "pointer",
              transition: "all 0.3s ease",
              color: "rgba(255,255,255,0.8)"
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#ef4444";
              e.target.style.transform = "scale(1.2)";
              e.target.style.filter = "drop-shadow(0 0 8px rgba(239,68,68,0.8))";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "rgba(255,255,255,0.8)";
              e.target.style.transform = "scale(1)";
              e.target.style.filter = "none";
            }}
          />
        ))}
      </div>

      {/* COPYRIGHT */}
      <p
        style={{
          fontSize: "13px",
          opacity: 0.6
        }}
      >
        © 2026 HackStreet. All Rights Reserved.
      </p>

      {/* subtle background glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "200px",
          background: "rgba(220,38,38,0.2)",
          filter: "blur(120px)",
          pointerEvents: "none"
        }}
      />
    </footer>
  );
}

export default Footer;