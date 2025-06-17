import { ProjectType } from "@/lib/types";
import { SectionContainer } from "../shared/section/SectionContainer";
import { SectionTitle } from "../shared/section/SectionTitle";
import { ProjectList } from "./ProjectList";

export function ProjectsSection({ projects }: { projects: ProjectType[] }) {
  return (
    <SectionContainer id="projects">
      <SectionTitle title="My Projects" />
      <ProjectList projects={projects} />
    </SectionContainer>
  );
}
