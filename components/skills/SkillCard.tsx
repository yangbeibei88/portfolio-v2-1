import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillType } from "@/lib/types";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export type SkillCardProps = Pick<SkillType, "skill_name" | "description"> & {
  icon: IconType | LucideIcon;
};

export function SkillCard({
  skill_name,
  description,
  icon: Icon,
}: SkillCardProps) {
  return (
    <Card className="flex flex-col flex-1">
      <CardHeader className="flex flex-col items-center justify-center gap-3">
        <Icon size={36} />
        <CardTitle className="text-2xl">{skill_name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">{description}</CardContent>
    </Card>
  );
}
