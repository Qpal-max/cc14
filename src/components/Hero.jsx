import DATA from "../Data";

export default function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.heroText}>
        <p style={styles.heroSub}>I am {DATA.name}</p>
        <h1 style={styles.heroTitle}>{DATA.role}</h1>
        <p style={styles.heroTagline}>{DATA.tagline}</p>
        <a href={DATA.cvLink} style={styles.cvBtn}>Download CV</a>
        <div style={styles.socialRow}>
          <a href={DATA.linkedin} style={styles.socialIcon} target="_blank" rel="noreferrer">in</a>
          <a href={DATA.github} style={styles.socialIcon} target="_blank" rel="noreferrer">gh</a>
        </div>
      </div>
      <div style={styles.heroImage}>
        {<img src="src/josh.png" alt={DATA.name} style={styles.img} />}
      </div>
    </section>
  );
}

const styles = {
  hero: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "5rem 4rem", minHeight: "90vh", gap: "2rem",
  },
  heroText: { flex: 1, maxWidth: 500 },
  heroSub: { color: "#aaa", marginBottom: "0.5rem", fontSize: 16 },
  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700,
    color: "#fff", lineHeight: 1.15, marginBottom: "1rem",
  },
  heroTagline: { color: "#888", fontSize: 15, lineHeight: 1.8, marginBottom: "2rem" },
  cvBtn: {
    display: "inline-block", border: "1px solid #555", color: "#fff",
    padding: "10px 24px", borderRadius: 6, textDecoration: "none",
    fontSize: 14, marginBottom: "1.5rem",
  },
  socialRow: { display: "flex", gap: "1rem", marginTop: "0.5rem" },
  socialIcon: {
    width: 36, height: 36, border: "1px solid #333", borderRadius: "50%",
    color: "#fff", textDecoration: "none", display: "flex",
    alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600,
  },
  heroImage: { flex: 1, display: "flex", justifyContent: "center" },
  imgPlaceholder: {
    width: 320, height: 400, background: "#1a1a1a",
    border: "1px dashed #333", borderRadius: 16,
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "#555", fontSize: 16,
  },
  img: { width: 320, height: 400, objectFit: "cover", borderRadius: 16 },
};