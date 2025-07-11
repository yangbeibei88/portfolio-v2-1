import { SkillType } from "@/lib/types";
import { SkillCard } from "./SkillCard";
import { iconMap } from "@/lib/utils/iconMap";

export function SkillList({ skills }: { skills: SkillType[] }) {
  const convertedSkills = skills.map((s) => ({
    ...s,
    icon: iconMap[s.icon],
  }));
  return (
    <ul className="w-full h-full flex flex-col gap-3 lg:flex-row items-stretch">
      {convertedSkills.map((s) => (
        <li key={s.id} className="flex flex-1">
          <SkillCard
            skill_name={s.skill_name}
            description={s.description}
            icon={s.icon}
          />
        </li>
      ))}
    </ul>
  );
}
