import { useState } from "react";
import DATA from "../Data";

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredTag, setHoveredTag] = useState(null);

  return (
    <section style={s.section}>
      <h2 style={s.title}>Skills</h2>
      <p style={s.sub}>Crafting seamless UI/UX and clean code</p>
      <div style={s.grid}>
        {DATA.skillGroups.map((g, i) => (
          <div
            key={g.title}
            style={{
              ...s.card,
              borderColor: hoveredCard === i ? "#444" : "#1f1f1f",
              transform: hoveredCard === i ? "translateY(-4px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 style={s.cardTitle}>{g.title}</h3>
            <div style={s.tags}>
              {g.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    ...s.tag,
                    background: hoveredTag === t ? "#2a2a2a" : "#1a1a1a",
                    color: hoveredTag === t ? "#fff" : "#777",
                  }}
                  onMouseEnter={() => setHoveredTag(t)}
                  onMouseLeave={() => setHoveredTag(null)}
                >
                  {t}
                </span>
              ))}
            </div>
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
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", textAlign: "left" },
  card: { background: "#111", border: "1px solid", borderRadius: 12, padding: "1.5rem", cursor: "pointer", transition: "border-color .2s, transform .2s" },
  cardTitle: { color: "#fff", fontWeight: 600, fontSize: 15, marginBottom: "1rem" },
  tags: { display: "flex", flexWrap: "wrap", gap: 6 },
  tag: { fontSize: 12, padding: "4px 10px", borderRadius: 5, border: "1px solid #2a2a2a", cursor: "pointer", transition: "background .15s, color .15s" },
};