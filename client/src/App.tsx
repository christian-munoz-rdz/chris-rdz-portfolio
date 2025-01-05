import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.main>
      <Toaster />
    </div>
  );
}

export default App;
