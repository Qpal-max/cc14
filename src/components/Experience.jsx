import DATA from "../Data";

export default function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.title}>Experience</h2>
      <p style={styles.sub}>Where I've worked and what I've built</p>
      <div style={styles.list}>
        {DATA.experience.map((job) => (
          <div key={job.title} style={styles.card}>
            <h3 style={styles.cardTitle}>{job.title}</h3>
            <p style={styles.meta}>{job.company} · {job.period}</p>
            <p style={styles.desc}>{job.description}</p>
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
  list: { display: "flex", flexDirection: "column", gap: "1.25rem", textAlign: "left" },
  card: { background: "#111", border: "1px solid #222", borderRadius: 12, padding: "1.5rem" },
  cardTitle: { color: "#fff", fontWeight: 600, fontSize: 17, marginBottom: "0.4rem" },
  meta: { color: "#555", fontSize: 13, marginBottom: "0.75rem" },
  desc: { color: "#777", fontSize: 14, lineHeight: 1.7 },
};