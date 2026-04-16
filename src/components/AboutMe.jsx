import DATA from "../Data";

export default function AboutMe() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.title}>About Me</h2>
      <p style={styles.about}>{DATA.about}</p>

      <p style={styles.approachLabel}>My Approach</p>
      <div style={styles.approachGrid}>
        {DATA.approach.map((a, i) => (
          <div key={a} style={styles.approachCard}>
            <span style={styles.num}>0{i + 1}</span>
            <span style={{ color: "#fff", fontSize: 15 }}>{a}</span>
          </div>
        ))}
      </div>

      <div style={styles.statsRow}>
        {DATA.stats.map((s) => (
          <div key={s.label} style={styles.statItem}>
            <span style={styles.statValue}>{s.value}</span>
            <span style={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: "5rem 4rem", borderTop: "1px solid #1a1a1a", textAlign: "center" },
  title: { fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem" },
  about: { color: "#777", fontSize: 15, lineHeight: 1.8, maxWidth: 700, margin: "0 auto 2.5rem" },
  approachLabel: { color: "#aaa", fontWeight: 600, marginBottom: "1rem", letterSpacing: "0.05em" },
  approachGrid: {
    display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem", marginBottom: "3rem", textAlign: "left",
  },
  approachCard: {
    background: "#111", border: "1px solid #222", borderRadius: 10,
    padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: 12,
  },
  num: { color: "#555", fontSize: 13, fontWeight: 700 },
  statsRow: { display: "flex", justifyContent: "center", gap: "4rem" },
  statItem: { display: "flex", flexDirection: "column", alignItems: "center" },
  statValue: { fontSize: "2.5rem", fontWeight: 700, color: "#fff" },
  statLabel: { color: "#666", fontSize: 13, marginTop: 4 },
};