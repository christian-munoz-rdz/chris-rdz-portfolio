import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { Toaster } from "@/components/ui/toaster";
import { pageTransition } from "@/lib/animations";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <motion.main 
        {...pageTransition}
        className="container mx-auto px-4 py-8"
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </motion.main>
      <Toaster />
    </div>
  );
}

export default App;