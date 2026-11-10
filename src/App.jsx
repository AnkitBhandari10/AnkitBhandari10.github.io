import {useState} from "react";
import './App.css';
import {LoadingScreen} from "./components/LoadingScreen"; 
import { MobileMenu } from "./components/MobileMenu";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const[menuOpen, setMenuOpen] = useState(false);

  return (
    <> 
    {isLoaded == false && <LoadingScreen onComplete={() => setIsLoaded(true)} />} 
      <div 
       className = {`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } bg-gradient-to-r from-purple-1000 to-blue-800 text-green-300`} //coloring gradiant for the background
      >
        <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <MobileMenu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
