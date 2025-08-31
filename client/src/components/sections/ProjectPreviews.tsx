import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const deployedProjects = [
  {
    id: 1,
    title: "My Own Financial Management App",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
    url: "https://christian-munoz-rdz.github.io/my-financial-app/",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "Creative Coding Projects",
    description: "Collaborative task management with real-time updates and team features",
    url: "https://christian-munoz-rdz.github.io/creative-coding-projects/index.html",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React", "TypeScript", "Firebase", "Tailwind"]
  },
  {
    id: 3,
    title: "Bullet Hell Js",
    description: "Beautiful weather app with forecasts, maps, and location-based insights",
    url: "https://christian-munoz-rdz.github.io/Js-Bulltet-Hell/",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React", "OpenWeather API", "Chart.js", "CSS3"]
  },
  {
    id: 4,
    title: "PickerBoxd",
    description: "Responsive portfolio showcasing projects with modern design and animations",
    url: "https://christian-munoz-rdz.github.io/pickerboxd/",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React", "Framer Motion", "Tailwind", "TypeScript"]
  }
];

export default function ProjectPreviews() {
  return (
    <section id="project-previews" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Main projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my deployed applications and see them in action. Each project demonstrates 
            different technologies and approaches to solving real-world problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {deployedProjects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => window.open(project.url, '_blank')}
                            className="gap-2 bg-white/90 hover:bg-white text-black"
                          >
                            <Eye className="h-4 w-4" />
                            Preview
                          </Button>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => window.open(project.url, '_blank')}
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                              +{project.tech.length - 3} more
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            Swipe or use arrow keys to navigate • Click any project to view it live
          </p>
        </motion.div>
      </div>
    </section>
  );
}