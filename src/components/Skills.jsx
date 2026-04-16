import DATA from "../Data";

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.title}>Skills</h2>
      <p style={styles.sub}>Crafting seamless UI/UX and clean code</p>
      <div style={styles.grid}>
        {DATA.skillGroups.map((g) => (
          <div key={g.title} style={styles.card}>
            <h3 style={styles.cardTitle}>{g.title}</h3>
            <div style={styles.tagGroup}>
              {g.tags.map((t) => (
                <span key={t} style={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: "5rem 4rem", borderTop: "1px solid #1a1a1a", textAlign: "center" },
  title: { fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" },
  sub: { color: "#666", fontSize: 14, marginBottom: "3rem" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem", textAlign: "left" },
  card: { background: "#111", border: "1px solid #222", borderRadius: 12, padding: "1.5rem" },
  cardTitle: { color: "#fff", fontWeight: 600, fontSize: 17, marginBottom: "1rem" },
  tagGroup: { display: "flex", flexWrap: "wrap", gap: 8 },
  tag: {
    background: "#1a1a1a", border: "1px solid #2a2a2a",
    color: "#999", fontSize: 12, padding: "5px 12px", borderRadius: 6,
  },
};