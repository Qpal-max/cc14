const navLinks = ["Home", "About", "Experience", "Education", "Skills", "Contact"];

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>yn</div>
      <div style={styles.navLinks}>
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} style={styles.navLink}>
            {link}
          </a>
        ))}
      </div>
      <a href="mailto:you@email.com" style={styles.talkBtn}>Let's Talk</a>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "1rem 4rem", borderBottom: "1px solid #222",
    position: "sticky", top: 0, background: "#0a0a0a", zIndex: 100,
  },
  logo: {
    width: 40, height: 40, borderRadius: "50%", background: "#fff",
    color: "#000", display: "flex", alignItems: "center",
    justifyContent: "center", fontWeight: 700, fontSize: 14,
  },
  navLinks: { display: "flex", gap: "2rem" },
  navLink: { color: "#ccc", textDecoration: "none", fontSize: 15 },
  talkBtn: {
    background: "transparent", border: "1px solid #555",
    color: "#fff", padding: "8px 20px", borderRadius: 6,
    textDecoration: "none", fontSize: 14,
  },
};