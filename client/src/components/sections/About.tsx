import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec"
              alt="Ryan Hoffman"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          
          <Card>
            <CardContent className="p-6">
              <p className="text-lg mb-4">
                I'm a passionate full-stack developer with expertise in modern web technologies.
                With several years of experience building scalable applications, I focus on creating
                elegant solutions to complex problems.
              </p>
              
              <p className="text-lg mb-4">
                My approach combines technical excellence with user-centered design principles,
                ensuring that the applications I build are not only functional but also intuitive
                and enjoyable to use.
              </p>
              
              <p className="text-lg">
                When I'm not coding, you can find me contributing to open-source projects,
                writing technical articles, and staying up-to-date with the latest developments
                in web technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
