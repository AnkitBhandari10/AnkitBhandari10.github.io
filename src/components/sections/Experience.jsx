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

export const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-bold">Experience</h2>

      <ol className="mt-8 space-y-10">
        {jobs.map((job) => (
          <li key={job.role} className="grid gap-2 md:grid-cols-[11rem_1fr] md:gap-8">
            <p className="text-sm text-[var(--muted)] md:pt-1">{job.dates}</p>
            <div>
              <h3 className="text-xl font-bold">{job.role}</h3>
              <p className="text-[var(--muted)]">{job.org}</p>
              <ul className="mt-3 list-disc ml-5 space-y-2 leading-relaxed">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}

        <li className="grid gap-2 md:grid-cols-[11rem_1fr] md:gap-8">
          <p className="text-sm text-[var(--muted)] md:pt-1">Sept 2024 – May 2029</p>
          <div>
            <h3 className="text-xl font-bold">University of British Columbia</h3>
            <p className="text-[var(--muted)]">BSc, Computer Science (Co-op Program)</p>
            <p className="mt-3 leading-relaxed">
              <span className="font-bold text-[var(--navy)]">Relevant coursework: </span>
              Software Construction, Data Structures and Algorithms, Algorithm Design and Analysis,
              Databases, Computer Systems (in progress), Applied Machine Learning (in progress)
            </p>
            <p className="mt-2 leading-relaxed">
              <span className="font-bold text-[var(--navy)]">Awards: </span>
              Dean's Scholar (2024 – 2025), Best Use of Auth0 at nwPlus HackCamp 2026
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
};
