export const Footer = () => {
  return (
    <footer className="mt-8 border-t border-[var(--line)]">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-sm text-[var(--muted)]">
        <p>Ankit Bhandari, {new Date().getFullYear()}. Built with React and hosted on GitHub Pages.</p>
        <nav className="flex gap-5" aria-label="Footer links">
          <a href="https://github.com/AnkitBhandari10" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--navy)]">GitHub</a>
          <a href="https://www.linkedin.com/in/ankitbh1" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--navy)]">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--navy)]">Resume</a>
        </nav>
      </div>
    </footer>
  );
};
