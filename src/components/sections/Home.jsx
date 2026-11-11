export const Home = () => {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Hi, I'm Ankit.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed">
        I'm a third-year Computer Science student in UBC's Co-op program, based in Vancouver.
        I build full-stack web apps, and I like the small details that make software feel fast.
      </p>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Currently looking for a January or Summer 2027 software engineering co-op.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="pill-button rounded-full bg-[var(--navy)] text-[var(--page)] px-6 py-3 font-bold"
        >
          See my projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="pill-button rounded-full bg-[var(--bubble)] text-[var(--navy)] px-6 py-3 font-bold"
        >
          Download resume
        </a>
      </div>
    </section>
  );
};
