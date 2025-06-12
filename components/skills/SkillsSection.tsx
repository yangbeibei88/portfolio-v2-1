import { SectionContainer } from "../shared/section/SectionContainer";
import { SectionTitle } from "../shared/section/SectionTitle";
import { SkillCard, SkillCardProps } from "./SkillCard";
import { CodeXml, Unplug, Database } from "lucide-react";

const skills: SkillCardProps[] = [
  {
    title: "Web Development",
    content:
      "Maecenas sodales orci in ex lobortis scelerisque. Ut nec felis ut elit tincidunt dignissim finibus sed ante. Nam facilisis risus ut libero laoreet, et congue dolor fermentum. Nam quis faucibus justo.",
    icon: CodeXml,
  },
  {
    title: "API development",
    content:
      "Maecenas sodales orci in ex lobortis scelerisque. Ut nec felis ut elit tincidunt dignissim finibus sed ante. Nam facilisis risus ut libero laoreet, et congue dolor fermentum. Nam quis faucibus justo.",
    icon: Unplug,
  },
  {
    title: "database management",
    content:
      "Maecenas sodales orci in ex lobortis scelerisque. Ut nec felis ut elit tincidunt dignissim finibus sed ante. Nam facilisis risus ut libero laoreet, et congue dolor fermentum. Nam quis faucibus justo.",
    icon: Database,
  },
];

export function SkillsSection() {
  return (
    <SectionContainer id="skills">
      <SectionTitle title="skills" />
      <ul className="flex flex-col gap-2 lg:flex-row items-center justify-center">
        {skills.map((s) => (
          <li key={s.title}>
            <SkillCard title={s.title} content={s.content} icon={s.icon} />
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
