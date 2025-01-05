import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiGit, SiDocker } from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "Docker", icon: SiDocker, color: "text-blue-700" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={item}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <skill.icon className={`w-12 h-12 ${skill.color} mb-4`} />
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
