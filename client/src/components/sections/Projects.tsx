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
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GithubIcon className="h-5 w-5" />
                      {repo.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      {repo.description || "No description provided"}
                    </p>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => window.open(repo.html_url, '_blank')}
                    >
                      View Source
                    </Button>
                    {repo.homepage && (
                      <Button
                        onClick={() => window.open(repo.homepage, '_blank')}
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
