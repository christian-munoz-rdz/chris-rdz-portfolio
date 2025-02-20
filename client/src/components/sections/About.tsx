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
              src="../../../assets/myphoto.jpg"
              alt="Ryan Hoffman"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>

          <Card>
            <CardContent className="p-6">
              <p className="text-lg mb-4">
                I'm a results-driven software developer with experience in
                frontend and backend development, specializing in React,
                TypeScript, and scalable applications. I thrive on building
                intuitive user interfaces and optimizing performance for
                seamless user experiences.
              </p>

              <p className="text-lg mb-4">
                My approach blends technical expertise with user-centered
                design, ensuring that every solution is efficient, maintainable,
                and enjoyable to use. I enjoy working in agile environments,
                collaborating with teams to deliver high-quality products.
              </p>

              <p className="text-lg">
                When I'm not coding, you can find me at the movies, the vinyl
                store, running in the park or participating in group activities and positively
                contributing to my community. I believe in continuous learning
                and fostering meaningful connections both inside and outside of
                the tech realm.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
