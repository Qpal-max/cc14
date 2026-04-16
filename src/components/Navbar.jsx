const navLinks = [
  { label: "Home",       id: "home" },
  { label: "About",      id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Education",  id: "education" },
  { label: "Skills",     id: "skills" },
  { label: "Contact",    id: "contact" },
];

export default function Navbar({ active, setActive }) {
  return (
    <nav style={s.nav}>
      <div style={s.logo}>yn</div>
      <div style={s.links}>
        {navLinks.map((l) => (
          <button
            key={l.id}
            onClick={() => setActive(l.id)}
            style={{
              ...s.link,
              color: active === l.id ? "#fff" : "#777",
              borderBottom: active === l.id ? "2px solid #fff" : "2px solid transparent",
            }}
          >
            {l.label}
          </button>
        ))}
      </div>
      <button style={s.talkBtn} onClick={() => setActive("contact")}>
        Let's Talk
      </button>
    </nav>
  );
}

const s = {
  nav: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "1rem 4rem", borderBottom: "1px solid #1a1a1a",
    position: "sticky", top: 0, background: "#0a0a0a", zIndex: 100,
  },
  logo: {
    width: 40, height: 40, borderRadius: "50%", background: "#fff",
    color: "#000", display: "flex", alignItems: "center",
    justifyContent: "center", fontWeight: 700, fontSize: 14,
  },
  links: { display: "flex", gap: "2rem" },
  link: {
    background: "none", border: "none", cursor: "pointer",
    fontSize: 14, paddingBottom: 4, transition: "color .2s, border-color .2s",
  },
  talkBtn: {
    background: "transparent", border: "1px solid #444", color: "#fff",
    padding: "8px 20px", borderRadius: 6, fontSize: 14, cursor: "pointer",
  },
};