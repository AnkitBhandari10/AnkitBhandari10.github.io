import { ScrollReveal } from "../ScrollReveal"

const projects = [
  {
    title: "Flockwork – UBC Student Hub",
    subtitle: "nwPlus HackCamp 2026 · Best Use of Auth0 🏆",
    points: [
      "Won Best Use of Auth0 with a 4-person team for a UBC-only platform tackling student isolation.",
      "Built the React front-end for study-buddy matching, skill swapping, project team-ups and a live campus activity map.",
      "Designed a FastAPI REST back-end with SQLAlchemy models on PostgreSQL, powering every feature from one shared data layer.",
      "Integrated Auth0 to restrict sign-up to verified UBC emails and validated access tokens on every protected endpoint.",
    ],
    tech: ["React", "FastAPI", "SQLAlchemy", "PostgreSQL", "Auth0"],
    link: { href: "https://flockwork.app.space/", label: "Visit Flockwork →" },
  },
  {
    title: "Flashidex – Study Application",
    subtitle: "Personal project",
    points: [
      "Built a Spring Boot REST API for CRUD on decks and flashcards, consumed by a React front-end with game-controller support.",
      "Implemented a heap-based priority queue that orders review by card importance with O(log n) updates.",
      "Wrote end-to-end tests with Cypress and Selenium alongside unit tests to validate each release.",
    ],
    tech: ["React", "Java", "Spring Boot", "MySQL", "Cypress"],
    link: null,
  },
  {
    title: "Digital Portfolio",
    subtitle: "Currently viewing",
    points: [
      "Built this accessible, responsive portfolio site with an EmailJS-powered contact form.",
      "Deployed automatically to GitHub Pages with a GitHub Actions workflow on every push.",
    ],
    tech: ["React", "Tailwind CSS", "Vite", "EmailJS", "GitHub Actions"],
    link: {
      href: "https://github.com/AnkitBhandari10/AnkitBhandari10.github.io",
      label: "View Code →",
    },
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen text-gray-400 bg-gray-900 body-font"
    >
      <ScrollReveal>
        <div className="container px-5 py-10 mx-auto lg:px-20">
          <h2 className="text-3xl font-bold mb-8 bg-green-300 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all flex flex-col"
              >
                <h3 className="text-xl text-green-400 font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.subtitle}</p>
                <ul className="text-purple-400 mb-5 list-disc list-outside ml-5 space-y-2 text-left">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors my-2"
                  >
                    {project.link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
