import { ScrollReveal } from "../ScrollReveal"

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    skills: ["Java", "Python", "C/C++", "SQL", "PHP", "Spring Boot", "FastAPI", "Node.js", "SQLAlchemy", "Laravel"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "MySQL", "PostgreSQL", "Auth0", "AWS (EC2)", "JUnit", "Cypress", "Selenium"],
  },
];

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Global iTech Systems",
    location: "Calgary, AB",
    dates: "Apr 2025 – Aug 2025",
    points: [
      "Diagnosed and resolved N+1 query inefficiencies in Laravel's ORM, halving page load times for operational web applications.",
      "Built React/JavaScript front-end components for event-driven UI logic across multiple digital channels, contributing to a 50% increase in website traffic.",
      "Resolved recurring database inconsistencies in production applications, ensuring accurate service information for business partners and customers.",
      "Engineered LLM prompts in an Agile team to streamline day-to-day business workflows.",
    ],
  },
  {
    role: "Math Tutor",
    company: "Sir Winston Churchill High School",
    location: "Calgary, AB",
    dates: "Sept 2022 – June 2024",
    points: [
      "Taught core math curricula, using practice assessments to find and close each student's learning gaps.",
    ],
  },
];

const chipClass =
  "bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen text-gray-400 bg-gray-900 body-font py-20"
    >
      <ScrollReveal>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-green-300 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <p className="text-gray-300 mb-6 text-center">
          I'm a third-year Computer Science student in UBC's Co-op program, based in Vancouver. I enjoy building
          full-stack apps end to end, from React interfaces to REST APIs and databases, and I care about the small
          details that make software feel fast and reliable. Most recently, my team won Best Use of Auth0 at nwPlus
          HackCamp 2026 with Flockwork, a hub that helps UBC students connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((tech) => (
                  <span key={tech} className={chipClass}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl hover:-translate-y-1 transition-all">
            <h3 className="text-green-300 text-xl font-bold mb-4">Education</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <h4 className="font-semibold">University of British Columbia</h4>
                <p>BSc, Computer Science (Co-op Program)</p>
                <p className="text-sm text-gray-400">Sept 2024 – May 2029</p>
              </div>
              <p>
                <strong>Relevant Coursework:</strong> Software Construction, Data Structures &amp; Algorithms,
                Algorithm Design &amp; Analysis, Databases, Computer Systems (in progress), Applied Machine Learning
                (in progress)
              </p>
              <p>
                <strong>Awards:</strong> Dean's Scholar (2024 – 2025); Best Use of Auth0, nwPlus HackCamp 2026
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl hover:-translate-y-1 transition-all">
            <h3 className="text-green-300 text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-6 text-gray-300">
              {experiences.map((job) => (
                <div key={job.role}>
                  <h4 className="font-semibold">
                    {job.role} – {job.company}
                  </h4>
                  <p className="text-sm text-gray-400 mb-2">
                    {job.location} · {job.dates}
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-1">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};
