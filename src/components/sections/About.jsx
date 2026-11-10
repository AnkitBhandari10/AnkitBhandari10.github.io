import { ScrollReveal } from "../ScrollReveal"

export const About = () => {
  const skillsFE = ["React", "Vite", "HTML5", "TailwindCSS", "JavaScript"]; //my front end skills
  const skillsBE = ["Java", "Node.js", "C++", "Python", "MySQL"]; //my back end skills

  return (
    <section
      id="about"
      className="min-h-screen text-gray-400 bg-gray-900 body-font"
    >
      <ScrollReveal>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-green-300 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <p className="text-gray-300 mb-6 text-center">
           I am passionate about working on detailed and intricate projects that polish the minute details found in everyday apps. Working on these features allows me to discover the remarkable things that can achieved with technology!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skillsFE.map((tech, key) => (
                <span
                  key={key}
                  className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skillsBE.map((tech, key) => (
                <span
                  key={key}
                  className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl hover:-translate-y-1 transition-all">
            <h3 className="text-green-300 text-xl font-bold mb-4">Education</h3>
            <ul className = "list-disc list-inside text-gray-300 space-y-2">
                <li>
                    <strong>BSc. in Computer Science </strong> - University of British Columbia 
                    (2024-2029)
                </li>
                <li>
                    Relevant Coursework: Java Programming I, Java Programming II, Computer Fluency, Computer Creativity
                </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl hover:-translate-y-1 transition-all">
            <h3 className=" text-green-300 text-xl font-bold mb-4">Work Experiences</h3>
            <div className = "space-y-4 text-gray-300">
                <div>
                    <h4 className = "font-semibold">Developer at Global iTech Systems</h4>
                    <p> (change later) Developed and maintained servers </p>
                </div>
                <div>
                    <h4 className = "font-semibold">(insert position here)</h4>
                    <p> (insert description here) </p>
                </div>
            </div>
          </div>
        </div>
      </div>
  </ScrollReveal> 
    </section>
  );
};
