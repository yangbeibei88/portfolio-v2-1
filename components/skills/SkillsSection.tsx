import { SectionContainer } from "../shared/section/SectionContainer";
import { SectionTitle } from "../shared/section/SectionTitle";
import { SkillType } from "@/lib/types";
import { SkillList } from "./SkillList";

export function SkillsSection({ skills }: { skills: SkillType[] }) {
  return (
    <SectionContainer id="skills">
      <SectionTitle title="skills" />
      <SkillList skills={skills} />
    </SectionContainer>
  );
}
