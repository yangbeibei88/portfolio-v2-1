import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

export type SkillCardProps = {
  title: string;
  content: string;
  icon: LucideIcon;
};

export function SkillCard({ title, content, icon: Icon }: SkillCardProps) {
  return (
    <Card>
      <CardHeader>
        <Icon size={24} />
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </CardHeader>
    </Card>
  );
}
