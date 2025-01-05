import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, ExternalLink } from "lucide-react";
import { getGithubRepos } from "@/lib/github";

export default function Projects() {
  const { data: repos, isLoading } = useQuery({
    queryKey: ["/api/github/repos"],
    queryFn: getGithubRepos
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-7 bg-muted rounded w-3/4"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-20 bg-muted rounded"></div>
                </CardContent>
                <CardFooter>
                  <div className="h-9 bg-muted rounded w-full"></div>
                </CardFooter>
              </Card>
            ))
          ) : (
            repos?.map((repo) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ 
                  duration: 0.2,
                  scale: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 bg-card">
                  <CardHeader className="relative group">
                    <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                      <GithubIcon className="h-5 w-5" />
                      {repo.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      {repo.description || "No description provided"}
                    </p>
                    {repo.language && (
                      <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                        {repo.language}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => window.open(repo.html_url, '_blank')}
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <GithubIcon className="h-4 w-4 mr-2" />
                      View Source
                    </Button>
                    {repo.homepage && (
                      <Button
                        onClick={() => window.open(repo.homepage, '_blank')}
                        className="hover:scale-105 transition-transform"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}