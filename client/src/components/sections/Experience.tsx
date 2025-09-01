import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "IBM",
    position: "Application Developer Intern",
    period: "September 2024 - June 2025",
    location: "Guadalajara, Jalisco, MX.",
    description: "Development and maintenance of frontend solutions using React, TypeScript, and Material UI, implementing clean and intuitive interfaces. Working in an agile environment following the Scrum methodology, collaborating with the team to plan sprints, prioritize tasks, and ensure continuous value delivery while maintaining an organized and collaborative workflow.",
    skills: ["React", "Node.js", "TypeScript", "Git/Github", "Material UI", "Java", "Spring Boot", "SQL"]
  },
  {
    id: 2,
    company: "PayStand",
    position: "Full Stack Engineer Jr.",
    period: "June 2025 - Present",
    location: "Guadalajara, Jalisco, MX.",
    description: "Development and maintenance of frontend solutions using React, TypeScript, and Material UI, implementing clean and intuitive interfaces. Working in an agile environment following the Scrum methodology, collaborating with the team to plan sprints, prioritize tasks, and ensure continuous value delivery while maintaining an organized and collaborative workflow.",
    skills: ["JavaScript", "Node.js", "Python", "Frappe", "Git/GitLab", "MySQL", "PostgreSQL", "Docker", "Temporal.io"]
  }

];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Professional Experience</h2>
          <p className="text-muted-foreground mt-2">My journey in software development</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="mb-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
