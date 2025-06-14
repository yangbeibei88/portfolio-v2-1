import { HeaderHero } from "@/components/header/HeaderHero";
import { MainNav } from "@/components/shared/topNav/MainNav";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <MainNav />
      <HeaderHero />
      <main>
        <SkillsSection />
        <ExperienceSection />
      </main>
    </div>
  );
}
