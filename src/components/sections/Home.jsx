import { ScrollReveal } from "../ScrollReveal"

export const Home = () => { 
    return (<section
        id = "home" 
        className = "min-h-screen flex items-center justify-center text-gray-400 bg-gray-900 body-font"//"min-h-screen flex items-center justify-center relative"
        > 
        <ScrollReveal>
            <div className = "text-center z-10 px-4">
                <h1 className = "text-5xl md:text-7xl font-bold mb-6 bg-green-300 bg-clip-text text-transparent leading-right">
                    This is Ankit Bhandari
                </h1>

                <p className = "text-green-400-text-lg mb-8 max-w-lg mx-auto">
                 I'm a Computer Science (Co-op) student at UBC and an aspiring Software Engineer based in Vancouver, BC. Keep scrolling to learn more about who I am!
                </p>
                
                <div className = "flex justify-center space-x-4">
                    <a 
                      href = "#projects" 
                      className = "bg-green-300 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                    >
                        View My Projects
                    </a>
                </div>
            </div>
         </ScrollReveal>
      </section>
    );
};
