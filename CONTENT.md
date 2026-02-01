# Content Management

## Adding a New Project

1. Create a new file in `content/projects/` (e.g., `my-new-project.ts`)
2. Copy the structure from `stake-sight.ts`
3. Fill in your project details
4. Import and add it to `lib/projects.ts`

### Example: Adding a new project

**Step 1:** Create `content/projects/my-new-project.ts`

```typescript
import { Zap } from "lucide-react"; // Choose an icon from lucide-react
import type { Project } from "@/content/projects/stake-sight";

const myNewProject: Project = {
  slug: "my-new-project", // URL slug
  title: "My New Project Title",
  excerpt: "Brief description for the card...",
  category: "Category Name",
  readTime: "10 min read",
  icon: Zap, // Icon component
  publishedDate: "January 30, 2026",
  challenge: "What problem did this solve...",
  solution: "How you solved it...",
  results: ["Key result 1", "Key result 2", "Key result 3"],
  techStack: ["Technology 1", "Technology 2", "Technology 3"],
  sections: [
    {
      heading: "Section 1 Title",
      content: "Detailed content for this section...",
    },
    {
      heading: "Section 2 Title",
      content: "More detailed content...",
    },
  ],
};

export default myNewProject;
```

**Step 2:** Update `lib/projects.ts`

```typescript
import type { Project } from "@/content/projects/stake-sight";
import stakeSight from "@/content/projects/stake-sight";
import myNewProject from "@/content/projects/my-new-project"; // Add import

const allProjects: Project[] = [
  stakeSight,
  myNewProject, // Add to array
];
```

**Step 3:** Commit and push

```bash
git add content/projects/my-new-project.ts lib/projects.ts
git commit -m "Add new project: My New Project"
git push
```

The site will automatically rebuild with your new project!

## Icon Options

Browse available icons at: https://lucide.dev/icons

Common options:

- `Target`, `Zap`, `Rocket`, `Database`, `Cloud`, `Lock`, `Cpu`, `Code`, `Globe`, `Server`, `Shield`, `TrendingUp`, `Package`, `Layers`, `Activity`

## Static Export

This site is configured for static export. Run:

```bash
npm run build
```

Output will be in the `out/` directory, ready to deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).
