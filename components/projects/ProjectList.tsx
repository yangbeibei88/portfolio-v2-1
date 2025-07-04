import { ProjectType } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";

export function ProjectList({ projects }: { projects: ProjectType[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {projects.map((p) => {
        return (
          <ProjectCard
            key={p.id}
            project_name={p.project_name}
            images={p.images}
            description={p.description}
            key_features={p.key_features}
            technologies={p.technologies}
            demo_url={p.demo_url}
            codebase_url={p.codebase_url}
          />
        );
      })}
    </ul>
  );
}
