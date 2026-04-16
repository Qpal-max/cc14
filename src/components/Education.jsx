import { useState } from "react";
import DATA from "../Data";

export default function Education() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={s.section}>
      <h2 style={s.title}>Education</h2>
      <p style={s.sub}>My academic background</p>
      {DATA.education.map((e, i) => (
        <div
          key={e.degree}
          style={{
            ...s.card,
            borderColor: hovered === i ? "#444" : "#1f1f1f",
            transform: hovered === i ? "translateX(6px)" : "translateX(0)",
          }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <h3 style={s.degTitle}>{e.degree}</h3>
          <p style={s.meta}>{e.school} · {e.period}</p>
          <p style={s.desc}>{e.details}</p>
        </div>
      ))}
    </section>
  );
}

const s = {
  section: { padding: "5rem 4rem", textAlign: "center", animation: "fadeIn .4s ease" },
  title: { fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 700, color: "#fff", marginBottom: ".75rem" },
  sub: { color: "#555", fontSize: 13, marginBottom: "2.5rem" },
  card: { background: "#111", border: "1px solid", borderRadius: 12, padding: "1.5rem", marginBottom: ".75rem", textAlign: "left", cursor: "pointer", transition: "border-color .2s, transform .2s" },
  degTitle: { color: "#fff", fontWeight: 600, fontSize: 16, marginBottom: ".35rem" },
  meta: { color: "#555", fontSize: 12, marginBottom: ".6rem" },
  desc: { color: "#666", fontSize: 13, lineHeight: 1.7 },
};