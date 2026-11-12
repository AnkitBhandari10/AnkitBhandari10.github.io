import { ImageSlot } from "../ImageSlot";

// To add a screenshot, put it in public/images/ using the "image" file name below.
const projects = [
  {
    title: "Flockwork",
    context: "UBC student hub. Won Best Use of Auth0 at nwPlus HackCamp 2026.",
    image: "/images/flockwork.png",
    points: [
      "Built the React front-end for study-buddy matching, skill swapping, project team-ups and a live campus activity map, with a 4-person team.",
      "Designed a FastAPI REST back-end with SQLAlchemy models on PostgreSQL, shared by every feature.",
      "Integrated Auth0 to limit sign-up to verified UBC emails, and validated access tokens on every protected endpoint.",
    ],
    tech: "React, FastAPI, SQLAlchemy, PostgreSQL, Auth0",
    link: { href: "https://flockwork.app.space/", label: "Visit Flockwork" },
  },
  {
    title: "Flashidex",
    context: "Personal project: a flashcard study app.",
    image: "/images/flashidex.png",
    points: [
      "Built a Spring Boot REST API for decks and flashcards, used by a React front-end with game-controller support.",
      "Implemented a heap-based priority queue that orders reviews by card importance with O(log n) updates.",
      "Wrote end-to-end tests with Cypress and Selenium alongside unit tests for each release.",
    ],
    tech: "React, Java, Spring Boot, MySQL, Cypress",
    link: null,
  },
  {
    title: "This portfolio",
    context: "The site you're on now.",
    image: "/images/portfolio.png",
    points: [
      "Built with React, Tailwind CSS and Vite, with an EmailJS contact form.",
      "Deploys automatically to GitHub Pages through a GitHub Actions workflow on every push.",
    ],
    tech: "React, Tailwind CSS, Vite, EmailJS, GitHub Actions",
    link: {
      href: "https://github.com/AnkitBhandari10/AnkitBhandari10.github.io",
      label: "View the code",
    },
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-bold">Projects</h2>

      <div className="mt-8 space-y-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col sm:flex-row gap-5 rounded-[2rem] bg-[var(--surface)] border border-[var(--line)] p-4 sm:p-5"
          >
            <ImageSlot
              src={p.image}
              alt={`Screenshot of ${p.title}`}
              hint={`Add screenshot: ${p.image.replace("/images/", "images/")}`}
              className="w-full sm:w-52 h-40 sm:h-36 shrink-0 rounded-3xl"
            />
            <div className="min-w-0">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-sm text-[var(--muted)]">{p.context}</p>
              <ul className="mt-3 list-disc ml-5 space-y-1.5 leading-relaxed">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <span className="text-[var(--muted)]">{p.tech}</span>
                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[var(--navy)] underline underline-offset-4 decoration-2 hover:decoration-[var(--bubble)]"
                  >
                    {p.link.label}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
