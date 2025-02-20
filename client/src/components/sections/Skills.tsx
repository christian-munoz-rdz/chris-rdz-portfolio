import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiReact, SiTypescript, SiNodedotjs, SiPython, SiGit } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const skills = [
  {
    name: "React",
    icon: SiReact,
    color: "text-blue-500",
    level: 98,
    description: "Expert in building complex applications with React, including hooks, context, and performance optimization."
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
    level: 90,
    description: "Strong TypeScript skills with focus on type safety, generics, and advanced type features."
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-600",
    level: 80,
    description: "Experienced in building scalable backend services with Node.js and Express."
  },
  {
    name: "Python",
    icon: SiPython,
    color: "text-yellow-500",
    level: 80,
    description: "Advanced Python development with expertise in Django, Flask, and data processing."
  },
  {
    name: "Git",
    icon: SiGit,
    color: "text-orange-600",
    level: 85,
    description: "Proficient in version control with Git, including advanced branching and CI/CD workflows."
  },
  {
    name: "Java",
    icon: DiJava,
    color: "text-red-500",
    level: 70,
    description: "Strong foundation in Java development, including Spring Boot and enterprise applications."
  },
];

type ChartData = {
  subject: string;
  A: number;
  fullMark: number;
};

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
  const chartData: ChartData[] = skills.map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100,
  }));

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full min-h-[400px]"
          >
            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                    <PolarGrid stroke="hsl(var(--muted-foreground))" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "hsl(var(--foreground))", fontSize: 14 }}
                    />
                    <Radar
                      name="Skills"
                      dataKey="A"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skill Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={item}>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="h-full group hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <skill.icon className={`w-12 h-12 ${skill.color} mb-4 transition-transform duration-300 group-hover:scale-110`} />
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                        <div className="mt-2 text-sm text-muted-foreground">
                          Proficiency: {skill.level}%
                        </div>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className={`w-5 h-5 ${skill.color}`} />
                        <h4 className="font-semibold">{skill.name}</h4>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {skill.description}
                      </div>
                      <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}