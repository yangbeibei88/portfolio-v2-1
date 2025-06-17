import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card className="w-full">
      <CardHeader>
        <Icon size={48} />
        <CardTitle>{skill_name}</CardTitle>
        <CardContent>{description}</CardContent>
      </CardHeader>
    </Card>
  );
}
