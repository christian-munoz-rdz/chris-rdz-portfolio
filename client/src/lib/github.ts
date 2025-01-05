import { z } from "zod";

const repoSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  html_url: z.string(),
  homepage: z.string().nullable(),
  stargazers_count: z.number(),
  language: z.string().nullable(),
});

type Repo = z.infer<typeof repoSchema>;

export async function getGithubRepos(): Promise<Repo[]> {
  const response = await fetch('https://api.github.com/users/ryanhoffman/repos?sort=stars&per_page=6');
  
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }

  const data = await response.json();
  return z.array(repoSchema).parse(data);
}
