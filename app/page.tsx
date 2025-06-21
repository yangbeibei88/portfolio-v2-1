import { HeaderHero } from "@/components/header/HeaderHero";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { getExperiences, getProjects, getSkills } from "./lib/db/getData";
import { ContactSection } from "@/components/contact/ContactSection";

export default async function HomePage() {
  const skills = await getSkills();
  const experiences = await getExperiences();
  const projects = await getProjects();
  return (
    <div className="w-full p-4 flex-1 pt-[70px]">
      <HeaderHero />
      <main>
        <SkillsSection skills={skills} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
    </div>
  );
}
