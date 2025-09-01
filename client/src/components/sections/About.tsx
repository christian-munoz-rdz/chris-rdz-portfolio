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
              src="../../assets/photos/my-photo.jpg"
              alt="My photo"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>

          <Card>
            <CardContent className="p-6">
              <p className="text-lg mb-4">
              I’m a software engineer who enjoys building products that truly impact people.
              On the frontend, I love designing features and interfaces that enhance the user experience
              and bring real value to the product.
              On the backend, I focus on solving problems with high-quality standards,
              refining my solutions until I deliver the best version of the code.
              I also enjoy modeling systems and designing architectures that adapt to the needs of each project.
              </p>

              <p className="text-lg mb-4">
              What sets me apart is my creativity and disruptive thinking—
              not just aiming for technical perfection,
              but also bringing fresh perspectives to problem-solving.
              I value collaboration and enjoy discussing different scenarios
              with my team to find the best solutions.
              </p>

              <p className="text-lg mb-4">
              In the long term, I aim to scale toward roles that involve more architectural design,
              while keeping creativity at the core of my work.
              My personal goal—now and in the future—is to apply imagination and disruptive thinking
              to software projects that have a positive social impact.
              </p>

              <p className="text-lg mb-4">
              Outside of coding, you’ll probably find me running, hiking, taking photos, or visiting art galleries. 
              I also love cinema, vinyl records, and finding new ways to blend code and art.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
