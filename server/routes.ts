import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  const httpServer = createServer(app);

  // GitHub proxy endpoint to avoid rate limiting and expose API key
  app.get("/api/github/repos", async (req, res) => {
    try {
      const response = await fetch(
        "https://api.github.com/users/christian-munoz-rdz/repos?sort=stars&per_page=1",
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            ...(process.env.GITHUB_TOKEN && {
              Authorization: `token ${process.env.GITHUB_TOKEN}`,
            }),
          },
        }
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`);
      }

      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("GitHub API error:", error);
      res.status(500).json({ message: "Failed to fetch GitHub repositories" });
    }
  });

  return httpServer;
}
