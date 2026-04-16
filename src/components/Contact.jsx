import DATA from "../Data";

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Contact</h2>
      <p style={styles.sub}>Let's work together</p>
      <div style={styles.grid}>
        {DATA.contact.map((c) => (
          <div key={c.label} style={styles.card}>
            <p style={styles.label}>{c.label}</p>
            <p style={styles.value}>{c.value}</p>
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
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", textAlign: "left" },
  card: { background: "#111", border: "1px solid #222", borderRadius: 12, padding: "1.25rem" },
  label: { color: "#555", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 },
  value: { color: "#fff", fontSize: 14, fontWeight: 500 },
};