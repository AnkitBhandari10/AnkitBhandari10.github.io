import { ImageSlot } from "../ImageSlot";

const skills = [
  { group: "Languages", items: "Java, Python, JavaScript, TypeScript, SQL, C/C++, PHP, HTML/CSS" },
  { group: "Frameworks and libraries", items: "React, Node.js, Spring Boot, FastAPI, SQLAlchemy, Laravel, Tailwind CSS, Vite" },
  { group: "Tools and platforms", items: "Git, GitHub, MySQL, PostgreSQL, Auth0, AWS (EC2), JUnit, Cypress, Selenium" },
];

// Add photos to public/images/ with these names. The first one shows large.
const photos = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Ankit holding his prize in front of the nwPlus HackCamp 2026 banner",
    caption: "Best Use of Auth0 at nwPlus HackCamp 2026",
  },
  { src: "/images/gallery-2.jpg", alt: "Photo 2", caption: "" },
  { src: "/images/gallery-3.jpg", alt: "Photo 3", caption: "" },
];

export const About = () => {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-start">
        <div>
          <h2 className="text-3xl font-bold">About me</h2>
          <p className="mt-5 leading-relaxed">
            Born and raised in Calgary, I moved to Vancouver to study at UBC. I enjoy building websites and apps end to end,
            from interactive React interfaces to REST APIs and secure databases. I've interned at Global iTech
            Systems, where I contributed to frontend development and resolved backend issues affecting the company's database.
          </p>
          <p className="mt-4 leading-relaxed">
            Most recently, I teamed up with three peers at nwPlus HackCamp 2026 to work on Flockwork,
            a platform that helps UBC students find study partners and collaborators through verified and secure sign-ups. We ended up taking home Best Use of Auth0!
          </p>

          <dl className="mt-8 space-y-4">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="font-bold text-[var(--navy)]">{s.group}</dt>
                <dd className="mt-1 text-[var(--muted)] leading-relaxed">{s.items}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-2 gap-3" aria-label="Photo gallery">
          {photos.map((p, i) => (
            <figure key={p.src} className={i === 0 ? "col-span-2" : ""}>
              <ImageSlot
                src={p.src}
                alt={p.alt}
                hint={`Add photo: images/gallery-${i + 1}.jpg`}
                className={`w-full rounded-3xl ${i === 0 ? "aspect-[4/3]" : "aspect-square"}`}
              />
              {p.caption && (
                <figcaption className="mt-2 text-xs text-[var(--muted)]">{p.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
