import { useEffect, useLayoutEffect, useRef, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bubble, setBubble] = useState({ left: 0, width: 0, visible: false });
  const [squish, setSquish] = useState(false);
  const linkRefs = useRef({});
  const navRef = useRef(null);

  // Track which section is on screen.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    const onScroll = () => {
      if (window.scrollY < 200) setActive(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Move the navy bubble under the active link, with a little squish.
  useLayoutEffect(() => {
    const el = active && linkRefs.current[active];
    if (!el || !navRef.current) {
      setBubble((b) => ({ ...b, visible: false }));
      return;
    }
    const navBox = navRef.current.getBoundingClientRect();
    const box = el.getBoundingClientRect();
    setBubble({ left: box.left - navBox.left, width: box.width, visible: true });
    setSquish(true);
    const t = setTimeout(() => setSquish(false), 220);
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className="sticky top-3 z-40 px-3 sm:px-6">
      <div className="header-pill mx-auto max-w-5xl flex items-center justify-between gap-4 rounded-full bg-[var(--surface)]/90 backdrop-blur-md border border-[var(--line)] shadow-[0_6px_24px_-12px_rgba(31,47,87,0.35)] pl-5 pr-2 py-2">
        <a
          href="#top"
          className="header-pop flex items-center gap-2 font-bold text-[var(--navy)] text-lg"
          style={{ fontFamily: "var(--font-head)", animationDelay: "0.25s" }}
        >
          <span className="grid place-items-center w-8 h-8 rounded-full bg-[var(--navy)] text-[var(--page)] text-xs">
            AB
          </span>
          Ankit Bhandari
        </a>

        <nav ref={navRef} className="relative hidden md:flex items-center gap-1" aria-label="Main navigation">
          <span
            aria-hidden="true"
            className={`nav-bubble absolute top-0 h-full rounded-full bg-[var(--navy)] ${squish ? "squish" : ""}`}
            style={{
              left: bubble.left,
              width: bubble.width,
              opacity: bubble.visible ? 1 : 0,
            }}
          />
          {links.map((l, i) => (
            <a
              key={l.id}
              ref={(el) => (linkRefs.current[l.id] = el)}
              href={`#${l.id}`}
              className={`nav-link header-pop relative z-10 rounded-full px-4 py-2 text-sm ${
                active === l.id ? "text-[var(--page)]" : "text-[var(--navy)] hover:bg-[var(--bubble)]"
              }`}
              style={{ animationDelay: `${0.3 + i * 0.07}s` }}
              aria-current={active === l.id ? "true" : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-button header-pop hidden sm:inline-block rounded-full bg-[var(--navy)] text-[var(--page)] px-5 py-2 text-sm font-bold"
            style={{ animationDelay: "0.6s" }}
          >
            Resume
          </a>
          <button
            type="button"
            className="pill-button md:hidden grid place-items-center w-10 h-10 rounded-full bg-[var(--bubble)] text-[var(--navy)] text-xl"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="header-pill md:hidden mx-auto mt-2 max-w-5xl rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-[0_6px_24px_-12px_rgba(31,47,87,0.35)] p-3 flex flex-col"
          aria-label="Mobile navigation"
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-full px-4 py-3 text-[var(--navy)] hover:bg-[var(--bubble)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-1 rounded-full px-4 py-3 bg-[var(--navy)] text-[var(--page)] font-bold text-center"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
};
