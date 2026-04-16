import DATA from "../Data";

export default function AboutMe() {
  return (
    <section style={s.section}>
      <h2 style={s.title}>About Me</h2>
      <p style={s.about}>{DATA.about}</p>
      <p style={s.approachLabel}>My Approach</p>
      <div style={s.grid}>
        {DATA.approach.map((a, i) => (
          <div key={a} style={s.card}>
            <span style={s.num}>0{i + 1}</span>
            <span style={{ color: "#ccc", fontSize: 14 }}>{a}</span>
          </div>
        ))}
      </div>
      <div style={s.stats}>
        {DATA.stats.map((st) => (
          <div key={st.label} style={{ textAlign: "center" }}>
            <div style={s.statVal}>{st.value}</div>
            <div style={s.statLbl}>{st.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const s = {
  section: { padding: "5rem 4rem", textAlign: "center", animation: "fadeIn .4s ease" },
  title: { fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem" },
  about: { color: "#666", fontSize: 14, lineHeight: 1.8, maxWidth: 680, margin: "0 auto 2.5rem" },
  approachLabel: { color: "#aaa", fontWeight: 600, marginBottom: "1rem", letterSpacing: ".05em" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1rem", marginBottom: "3rem", textAlign: "left" },
  card: { background: "#111", border: "1px solid #1f1f1f", borderRadius: 10, padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: 12, transition: "border-color .2s" },
  num: { color: "#444", fontSize: 13, fontWeight: 700 },
  stats: { display: "flex", justifyContent: "center", gap: "4rem" },
  statVal: { fontSize: "2.4rem", fontWeight: 700, color: "#fff" },
  statLbl: { color: "#555", fontSize: 12, marginTop: 4 },
};