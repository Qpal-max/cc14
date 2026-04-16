import { useState } from "react";
import DATA from "../Data";

export default function Contact() {
  const [copied, setCopied] = useState(null);
  const [hovered, setHovered] = useState(null);

  const handleCopy = (value, label) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section style={s.section}>
      <h2 style={s.title}>Contact</h2>
      <p style={s.sub}>Click any card to copy</p>
      <div style={s.grid}>
        {DATA.contact.map((c) => (
          <div
            key={c.label}
            onClick={() => handleCopy(c.value, c.label)}
            style={{
              ...s.card,
              borderColor: hovered === c.label ? "#444" : "#1f1f1f",
              transform: hovered === c.label ? "translateY(-3px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHovered(c.label)}
            onMouseLeave={() => setHovered(null)}
          >
            <p style={s.label}>{c.label}</p>
            <p style={s.value}>{c.value}</p>
            {copied === c.label && <p style={s.copied}>Copied!</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

const s = {
  section: { padding: "5rem 4rem", textAlign: "center", animation: "fadeIn .4s ease" },
  title: { fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 700, color: "#fff", marginBottom: ".75rem" },
  sub: { color: "#555", fontSize: 13, marginBottom: "2.5rem" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: ".75rem", textAlign: "left" },
  card: { background: "#111", border: "1px solid", borderRadius: 10, padding: "1.1rem", cursor: "pointer", transition: "border-color .2s, transform .2s" },
  label: { color: "#444", fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 5 },
  value: { color: "#ccc", fontSize: 13, fontWeight: 500 },
  copied: { color: "#4ade80", fontSize: 12, marginTop: 6 },
};