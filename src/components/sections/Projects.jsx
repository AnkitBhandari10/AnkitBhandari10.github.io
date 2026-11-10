import { ScrollReveal } from "../ScrollReveal"


export const Projects = () => {

    return (
    <section 
        id = "projects" 
        className = "min-h-screen text-gray-400 bg-gray-900 body-font"
    >
        <ScrollReveal>
        <div className = "container px-5 py-10 mx-auto text-center lg:px-40">
            <h2 className = "text-3xl font-bold mb-8 bg-green-300 bg-clip-text text-transparent text-center"> Featured Projects

            </h2>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
                    <h3 className = "text-xl text-green-400 font-bold mb-2"> Currently Viewing: <br></br>Digital Web Portfolio </h3>
                    <p className = "text-purple-400 mb-5">
                        <ul>
                        <li> -Built a responsive and dynamic webpage which displays information about my projects, professional skills, experiences, and industry achievements.</li>
                        <li> <br></br></li>
                        <li> -Optimized features that remain consistent for viewing and interaction on mobile devices. </li>
                        </ul>
                    </p>
                    <div className = "flex flex-wrap gap-2 mb-4">
                        {["React", "Node.js", "Vite" ,"Git", "GitHub"].map((tech, key) => (
                            <span
                            key={key}
                            className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all"
                        >
                            {tech}
                             </span>
                        ))}
                    </div>
                    <div className = "flex justify-between items-center">
                        <a href = "#" className = "text-green-400 hover:text-green-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>

                <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
                    <h3 className = "text-xl text-green-400 font-bold mb-2"> Project 2 </h3>
                    <p className = "text-purple-400 mb-5">
                        Project description....
                    </p>
                    <div div className = "flex flex-wrap gap-2 mb-4">
                        {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                            <span
                            key={key}
                            className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all"
                        >
                            {tech}
                             </span>
                        ))}
                    </div>
                    <div className = "flex justify-between items-center">
                        <a href = "#" className = "text-green-400 hover:text-green-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>
            </div>
        </div>
     </ScrollReveal>
    </section>
    );
};