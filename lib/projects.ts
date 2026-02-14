import type { Project } from "@/content/projects/stake-sight";
import stakeSight from "@/content/projects/stake-sight";
import myMassageCottage from "@/content/projects/my-massage-cottage";

// Import all projects here as you add them
// import newProject from "@/content/projects/new-project";

const allProjects: Project[] = [
  myMassageCottage,
  stakeSight,
  // Add new projects here
];

export function getAllProjects(): Project[] {
  return allProjects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return allProjects.map((project) => project.slug);
}
