import { useEffect, useState } from "react";
import "./title.css";

const links = [
  { label: "GitHub", href: "https://github.com/AnkitBhandari10" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ankitbh1" },
];

const jobs = [
  {
    role: "Software Engineer Intern",
    org: "Global iTech Systems, Calgary, AB",
    dates: "Apr 2025 – Aug 2025",
    points: [
      "Diagnosed and resolved N+1 query inefficiencies in Laravel's ORM, halving page load times for operational web applications.",
      "Built React/JavaScript front-end components for event-driven UI logic across multiple digital channels, contributing to a 50% increase in website traffic.",
      "Resolved recurring database inconsistencies in production applications, ensuring accurate service information for business partners and customers.",
      "Engineered LLM prompts in an Agile team to streamline day-to-day business workflows.",
    ],
  },
];

const projects = [
  {
    title: "Flockwork",
    context: "UBC student platform for finding study partners, skill swaps and project teammates. Built with a 4-person team; won Best Use of Auth0 at nwPlus HackCamp 2026.",
    points: [
      "Built the Buddies and SkillShare swipe decks and mutual skill matching, ranking students by shared interests and the skills they can teach each other.",
      "Added profile fields and editing, and FastAPI endpoints that save students' projects on the server so others can browse them.",
      "Built the Speed Matching page in React and gave Projects and Campus Activity their own pages.",
      "Contributed to the Auth0 integration that limits sign-up to UBC emails, alongside teammates who led the authentication work.",
    ],
    tech: "React, TypeScript, FastAPI, SQLAlchemy, PostgreSQL, Auth0",
    link: { href: "https://github.com/goople-tech/skillshare", label: "Source code" },
  },
  {
    title: "Flashidex",
    context: "Personal project: a flashcard study app.",
    points: [
      "Built a Spring Boot REST API for decks and flashcards, used by a React front-end with game-controller support.",
      "Implemented a heap-based priority queue that orders reviews by card importance with O(log n) updates.",
      "Wrote end-to-end tests with Cypress and Selenium alongside unit tests for each release.",
    ],
    tech: "React, Java, Spring Boot, MySQL, Cypress",
  },
  {
    title: "This portfolio",
    context: "The site you're on now.",
    points: [
      "Built with React and Vite, laid out like a game title screen, and deployed to GitHub Pages with GitHub Actions.",
    ],
    tech: "React, Vite, GitHub Actions",
    link: { href: "https://github.com/AnkitBhandari10/AnkitBhandari10.github.io", label: "View the code" },
  },
];

const About = () => (
  <>
    <p>
      I'm a third-year Computer Science co-op student at UBC who builds full-stack apps with
      React, Java/Spring Boot and Python/FastAPI. I interned as a Software Engineer at Global
      iTech Systems, where I sped up slow pages by fixing database queries and built React
      components for the company's websites.
    </p>
    <p>
      At nwPlus HackCamp 2026, my team of four built Flockwork, a platform that helps UBC
      students find study partners, and won Best Use of Auth0. Originally from Calgary, I'm
      now based in Vancouver.
    </p>
    <p className="ts-note">Currently looking for a January or Summer 2027 software engineering co-op.</p>
    
  </>
);

const Experience = () => (
  <>
    {jobs.map((j) => (
      <article key={j.role} className="ts-entry">
        <h3>{j.role}</h3>
        <p className="ts-meta">{j.org} · {j.dates}</p>
        <ul>
          {j.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </article>
    ))}
  </>
);

const Projects = () => (
  <>
    {projects.map((p) => (
      <article key={p.title} className="ts-entry">
        <h3>{p.title}</h3>
        <p className="ts-meta">{p.context}</p>
        {p.image && <img className="ts-shot" src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" />}
        <ul>
          {p.points.map((pt) => <li key={pt}>{pt}</li>)}
        </ul>
        <p className="ts-meta">
          {p.tech}
          {p.link && (
            <>
              {" · "}
              <a href={p.link.href} target="_blank" rel="noopener noreferrer">{p.link.label}</a>
            </>
          )}
        </p>
      </article>
    ))}
  </>
);

const Education = () => (
  <article className="ts-entry">
    <h3>University of British Columbia</h3>
    <p className="ts-meta">BSc, Computer Science (Co-op Program) · Sept 2024 – May 2029</p>
    <p>
      <strong>Relevant coursework:</strong> Software Construction, Data Structures and Algorithms, Algorithm Design and
      Analysis, Databases, Computer Systems (in progress), Applied Machine Learning (in progress)
    </p>
    <p>
      <strong>Awards:</strong> Dean's Scholar (2024 – 2025), Best Use of Auth0 at nwPlus HackCamp 2026
    </p>
  </article>
);

const sections = [
  { id: "about", label: "About", Body: About },
  { id: "experience", label: "Experience", Body: Experience },
  { id: "projects", label: "Projects", Body: Projects },
  { id: "education", label: "Education", Body: Education },
];

const fromHash = () => {
  const id = window.location.hash.slice(1);
  return sections.some((s) => s.id === id) ? id : "about";
};

function App() {
  const [active, setActive] = useState(fromHash);

  useEffect(() => {
    const onHash = () => setActive(fromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const select = (id) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  // Up and down arrow keys move through the menu, like a game
  const onMenuKey = (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const i = sections.findIndex((s) => s.id === active);
    const step = e.key === "ArrowDown" ? 1 : sections.length - 1;
    const next = sections[(i + step) % sections.length];
    select(next.id);
    document.getElementById(`opt-${next.id}`)?.focus();
  };

  const current = sections.find((s) => s.id === active);
  const Body = current.Body;

  return (
    <div className="ts">
      <h1 className="ts-name">Ankit Bhandari</h1>

      <main className="ts-panel" id="panel">
        <div key={active} className="ts-panel-inner">
          <h2>{current.label}</h2>
          <Body />
        </div>
      </main>

      <nav className="ts-menu" aria-label="Sections" onKeyDown={onMenuKey}>
        {sections.map((s) => (
          <button
            key={s.id}
            id={`opt-${s.id}`}
            type="button"
            className={`ts-opt${s.id === active ? " is-on" : ""}`}
            aria-current={s.id === active ? "page" : undefined}
            aria-controls="panel"
            onClick={() => select(s.id)}
          >
            <span className="ts-mark" aria-hidden="true">&gt;<span className="ts-cur">_</span></span>
            {s.label}
          </button>
        ))}
      </nav>

      <footer className="ts-links">
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
        ))}
      </footer>
    </div>
  );
}

export default App;
